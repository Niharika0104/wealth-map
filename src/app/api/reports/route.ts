import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Save report
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // It's good practice to validate the request body here
  const { title, description, notes, reportType, userId } = req.body;

  // Basic validation example (can be more sophisticated)
  if (!title || !reportType || !userId) {
    return res.status(400).json({ message: 'Missing required fields: title, reportType, userId' });
  }

  try {
    const report = await prisma.report.create({
      data: {
        title,
        description,
        notes,
        reportType,
        userId,
      },
    });

    // Send back the created report along with the success message
    res.status(201).json({ message: 'Report saved successfully', report });
  } catch (error) {
    console.error('Error saving report:', error);
    res.status(500).json({ message: 'Error saving report' });
  }
}

// Get reports (all or by ID)
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // id can be string | string[] | undefined

  try {
    if (id) {
      // Get report by ID
      // Ensure id is a single string (query params can be arrays if duplicated)
      const reportId = Array.isArray(id) ? id[0] : id;

      // Validate reportId if necessary (e.g., if it should be a specific format like UUID)
      if (!reportId) {
        return res.status(400).json({ message: 'Report ID is missing or invalid.' });
      }
      
      const report = await prisma.report.findUnique({
        // Assuming your Prisma model's id field is a String.
        // If it's an Int, you'd use: where: { id: parseInt(reportId) }
        // and add validation to ensure reportId is a valid number.
        where: { id: String(reportId) },
      });

      if (report) {
        res.status(200).json(report);
      } else {
        res.status(404).json({ message: `Report with ID ${reportId} not found` });
      }
    } else {
      // Get all reports
      const reports = await prisma.report.findMany();
      res.status(200).json(reports);
    }
  } catch (error) {
    console.error('Error getting report(s):', error);
    // Generic error for unexpected issues
    res.status(500).json({ message: 'Error retrieving report(s)' });
  }
}

// Delete report by ID
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'Report ID is required for deletion' });
  }

  // Ensure id is a single string
  const reportId = Array.isArray(id) ? id[0] : id;
  
  if (!reportId) {
    return res.status(400).json({ message: 'Report ID is missing or invalid.' });
  }

  try {
    await prisma.report.delete({
      // Assuming your Prisma model's id field is a String.
      // If it's an Int, you'd use: where: { id: parseInt(reportId) }
      where: { id: String(reportId) },
    });
    // Successfully deleted. 204 No Content is also an option if not returning a message.
    res.status(200).json({ message: `Report with ID ${reportId} deleted successfully` });
  } catch (error: any) {
    console.error(`Error deleting report with ID ${reportId}:`, error);
    // Prisma throws a P2025 error code if the record to delete is not found.
    if (error.code === 'P2025') {
      res.status(404).json({ message: `Report with ID ${reportId} not found` });
    } else {
      res.status(500).json({ message: 'Error deleting report' });
    }
  }
}

// Default handler for methods not explicitly defined
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  switch (req.method) {
    case 'POST':
      return POST(req, res);
    case 'GET':
      return GET(req, res);
    case 'DELETE':
      return DELETE(req, res);
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
