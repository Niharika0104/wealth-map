"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { capitalizeFirstLetter, Property } from "@/Models/models"
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  LineChart as ReLineChart,
  Line
} from "recharts";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProperties } from "@/lib/api/properties" // Updated import path
import { BarChart, PieChart, LineChart, Save, Share, Download, Plus, Trash2, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

import html2canvas from 'html2canvas-pro'; // Make sure you have the latest version or html2canvas-pro installed
import jsPDF from 'jspdf';
import { format } from "date-fns"
import { Report } from "@/Models/models"
import { createReport } from "@/lib/api/reports"
import { useSession } from "next-auth/react"

interface ReportChartRendererProps {
  report: Report;
  availableFields: { id: string; label: string }[];
  trendingProperties: Property[]; // Use the Property interface here
  COLORS: string[];
  isDownloadPreview?: boolean; // New prop to adjust rendering for download
}

const ReportChartRenderer: React.FC<ReportChartRendererProps> = ({
  report,
  availableFields,
  trendingProperties,
  COLORS,
  isDownloadPreview = false,
}) => {
  // Parse notes if it's a string
  const reportData = typeof report.notes === 'string' ? JSON.parse(report.notes) : report.notes;
  const properties = reportData?.properties || [];
  const fields = reportData?.fields || [];

  // Helper function to parse numerical values from property data
  const parseValue = (value: string | number | undefined): number => {
    if (typeof value === 'string') {
      const parsed = parseFloat(value.replace(/[^0-9.]/g, ""));
      return isNaN(parsed) ? 0 : parsed;
    }
    return typeof value === 'number' ? value : 0;
  };

  // Helper to truncate long names for legends/labels
  const truncateName = (name: string, maxLength: number = 25): string => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + "...";
    }
    return name;
  };

  // Custom Tooltip for Bar and Line Charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const originalProp = trendingProperties.find(p => p.address.startsWith(label));
      const displayLabel = originalProp ? originalProp.address : label;

      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow-md text-sm">
          <p className="font-bold mb-1">{displayLabel}</p>
          {payload.map((entry: any, index: number) => {
            const fieldLabel = availableFields.find(f => f.id === entry.dataKey)?.label || entry.dataKey;
            return (
              <p key={`item-${index}`} style={{ color: entry.color }}>
                {`${fieldLabel}: ${entry.value}`}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  // Data preparation logic for Recharts
  const getChartData = useCallback(() => {
    // Only filter for properties *selected in this report*
    const propertiesForReport = trendingProperties.filter(p => properties.includes(p.id));

    if (report.type === "pie") {
      return fields.map((field: string, idx: number) => {
        let chartData: { name: string; value: number; color: string }[] = [];

        if (field === "confidenceLevel") {
          const confidenceMap = new Map<string, number>();
          propertiesForReport.forEach((prop) => {
            const level = prop.confidence || "Unknown";
            confidenceMap.set(level, (confidenceMap.get(level) || 0) + 1);
          });
          chartData = Array.from(confidenceMap.entries()).map(([name, value], idx) => ({
            name,
            value,
            color: COLORS[idx % COLORS.length],
          }));
        } else {
          chartData = propertiesForReport.map((prop, idx) => {
            const propertyName = prop.address || `Property ${prop.id}`;
            const rawValue = (prop as Record<string, any>)?.[field === "Price" ? "value" : field];
            const value = parseValue(rawValue);

            return {
              name: truncateName(propertyName, 20),
              value,
              color: COLORS[idx % COLORS.length],
            };
          });
          // Filter out items with zero value if they make the chart unreadable
          chartData = chartData.filter(item => item.value > 0);
        }
        return { field, data: chartData };
      });
    } else { // bar or line chart
      return propertiesForReport.map((prop) => {
        const data: any = { name: truncateName(prop.address || `Property ${prop.id}`, isDownloadPreview ? 20 : 15) };
        fields.forEach((field: string, idx: number) => {
          data[field] = parseValue((prop as Record<string, any>)?.[field === "Price" ? "value" : field]);
        });
        return data;
      });
    }
  }, [report.type, properties, fields, trendingProperties, COLORS, isDownloadPreview]);

  const chartData = getChartData();

  // Condition to show "No data" message
  const hasData = (report.type === "pie") ?
    (chartData as { field: string; data: any[] }[]).some(item => item.data.length > 0) :
    (chartData as any[]).length > 0;

  if (properties.length === 0 || fields.length === 0 || !hasData) {
    return (
      <div className="text-center p-8 text-gray-500">
        No data available to render this chart.
      </div>
    );
  }

  return (
    <>
      {report.type === "pie" ? (
        // Adjusted grid layout for better spacing in PDF
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {(chartData as { field: string; data: any[] }[]).map((pieChart: any) => (
            <div key={pieChart.field} className="min-w-0">
              <h4 className="text-center mb-2 text-md font-semibold">
                {availableFields.find(f => f.id === pieChart.field)?.label} Distribution
              </h4>
              {pieChart.data.length > 0 ? (
                // Adjusted height for pie chart to ensure legend fits
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart
                      margin={isDownloadPreview ? { top: 20, right: 100, bottom: 20, left: 20 } : { top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                      <Pie
                        data={pieChart.data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                      >
                        {pieChart.data.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="top" // Adjusted to 'top' for better vertical distribution
                        wrapperStyle={{
                          paddingLeft: '10px',
                          maxHeight: isDownloadPreview ? 200 : '100%', // Fixed max height for download, scrollable
                          overflowY: isDownloadPreview ? 'auto' : 'hidden', // Auto scroll for download
                          width: isDownloadPreview ? 150 : 'auto', // Fixed width for download to help wrapping
                          fontSize: isDownloadPreview ? '10px' : '12px', // Smaller font for download
                          wordBreak: 'break-word', // Ensure long words break
                        }}
                        formatter={(value, entry) => (
                          <span className="text-sm">{truncateName(value as string, isDownloadPreview ? 25 : 30)}</span>
                        )}
                      />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="text-center text-gray-500">No data for this chart.</p>
              )}
            </div>
          ))}
        </div>
      ) : report.type === "bar" ? (
        <div className="w-full max-w-3xl h-[300px] bg-gray-100 rounded-md flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <ReBarChart
              data={chartData as any[]}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {fields.map((field: string, idx: number) => (
                <Bar key={field} dataKey={field} fill={COLORS[idx % COLORS.length]} />
              ))}
            </ReBarChart>
          </ResponsiveContainer>
        </div>
      ) : ( // line chart
        <div className="w-full max-w-3xl h-[300px] bg-gray-100 rounded-md flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <ReLineChart
              data={chartData as any[]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {fields.map((field: string, idx: number) => (
                <Line
                  key={field}
                  type="monotone"
                  dataKey={field}
                  stroke={COLORS[idx % COLORS.length]}
                  activeDot={{ r: 8 }}
                />
              ))}
            </ReLineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};
// --- End New Component ---


const CustomReports = () => {
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("create");
  const [reportName, setReportName] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [chartType, setChartType] = useState<Report['type']>("bar");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [savedReports, setSavedReports] = useState<Report[]>([]);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [currentReportId, setCurrentReportId] = useState<string | null>(null);
  const [shareEmail, setShareEmail] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658", "#d0ed57", "#a4de6c", "#c2d6ff", "#f5d7d7", "#d7f5d7", "#d7d7f5"];

  // Fetch saved reports
  useEffect(() => {
    const fetchSavedReports = async () => {
      if (!session?.user) return;
      
      try {
        const response = await fetch('/api/reports', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch saved reports');
        }

        const reports = await response.json();
        setSavedReports(reports.map((report: Report) => ({
          ...report,
          name: report.title ? report.title.split('_').slice(0, -1).join('_') : 'Untitled Report' // Clean up the title with null check
        })));
      } catch (err) {
        console.error('Error fetching saved reports:', err);
        toast({
          title: "Error",
          description: "Failed to load saved reports",
          variant: "destructive",
        });
      }
    };

    fetchSavedReports();
  }, [session?.user, toast]);

  // Fetch properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { allProperties } = await getProperties();
        setProperties(allProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        toast({
          title: "Error",
          description: "Failed to load properties",
          variant: "destructive",
        });
      }
    };
    fetchProperties();
  }, [toast]);

  // Refs for chart previews
  const createChartRef = useRef<HTMLDivElement>(null); // For the chart in the "Create" tab
  const hiddenChartRef = useRef<HTMLDivElement>(null); // For the hidden chart to be captured

  // State to hold the report data for the hidden chart to render
  const [reportToCapture, setReportToCapture] = useState<Report | null>(null);


  // Available fields for reports
  const availableFields = [
    { id: "price", label: "Property Value" },
    { id: "area", label: "Square Footage" },
   
    { id: "views", label: "View Count" },
  ]
  const [propertySearchTerm, setPropertySearchTerm] = useState("")
  // Filter properties based on selection and search
  const filteredProperties = properties.filter((property:Property) => {
    // First apply the confidence filter
    let passesConfidenceFilter = true
    if (propertyFilter === "high") passesConfidenceFilter = property.confidence === "High"
    else if (propertyFilter === "medium") passesConfidenceFilter = property.confidence === "Medium"
    else if (propertyFilter === "low") passesConfidenceFilter = property.confidence === "Low"

    // Then apply the search filter if there's a search term
    const passesSearchFilter =
      propertySearchTerm === "" ||
      property.address.toLowerCase().includes(propertySearchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(propertySearchTerm.toLowerCase()) ||
      property.price.toString().toLowerCase().includes(propertySearchTerm.toLowerCase()) ||
      (property.type ? property.type.toLowerCase() : '').includes(propertySearchTerm.toLowerCase())

    return passesConfidenceFilter && passesSearchFilter
  })

  // Toggle property selection
  const toggleProperty = (propertyId: string) => {
    if (selectedProperties.includes(propertyId)) {
      setSelectedProperties(selectedProperties.filter((id) => id !== propertyId))
    } else {
      setSelectedProperties([...selectedProperties, propertyId])
    }
  }

  // Toggle field selection
  const toggleField = (fieldId: string) => {
    if (selectedFields.includes(fieldId)) {
      setSelectedFields(selectedFields.filter((id) => id !== fieldId))
    } else {
      setSelectedFields([...selectedFields, fieldId])
    }
  }

  // Select all properties
  const selectAllProperties = () => {
    if (selectedProperties.length === filteredProperties.length) {
      setSelectedProperties([])
    } else {
      setSelectedProperties(filteredProperties.map((p) => p.id))
    }
  }

  // Save report
  const saveReport = async () => {
    if (!session?.user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to save reports",
        variant: "destructive",
      });
      return;
    }

    if (!reportName) {
      toast({
        title: "Report Name Required",
        description: "Please enter a name for your report",
        variant: "destructive",
      });
      return;
    }

    if (selectedProperties.length === 0) {
      toast({
        title: "Properties Required",
        description: "Please select at least one property",
        variant: "destructive",
      });
      return;
    }

    if (selectedFields.length === 0) {
      toast({
        title: "Fields Required",
        description: "Please select at least one field",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const reportData = {
        title: reportName,
        description: reportDescription,
        reportType: chartType,
        notes: JSON.stringify({
          properties: selectedProperties,
          fields: selectedFields
        }),
        exported: false
      };

      const response = await fetch('/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reportData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save report');
      }

      const newReport = await response.json();
      
      // Extract the original title by removing the timestamp
      const originalTitle = newReport.title.split('_').slice(0, -1).join('_');
      
      // Add the new report to the saved reports list
      setSavedReports(prev => [{
        ...newReport,
        name: originalTitle,
        properties: selectedProperties,
        fields: selectedFields
      }, ...prev]);
      
      // Reset form fields
      setReportName("");
      setReportDescription("");
      setSelectedProperties([]);
      setSelectedFields([]);
      setChartType("bar");
      
      toast({
        title: "Success",
        description: "Report saved successfully",
        variant: "default",
      });

      // Switch to saved reports tab
      setActiveTab("saved");
    } catch (err) {
      console.error('Error saving report:', err);
      setError(err instanceof Error ? err.message : 'Failed to save report');
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : 'Failed to save report',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Delete report
  const deleteReport = (reportId: string) => {
    setSavedReports(savedReports.filter((report) => report.id !== reportId))

    toast({
      title: "Report deleted",
      description: "The report has been deleted successfully.",
      variant: "default",
    })
  }

  // Open share dialog
  const openShareDialog = (reportId: string) => {
    setCurrentReportId(reportId)
    setShareDialogOpen(true)
  }

  // Share report
  const shareReport = () => {
    if (!shareEmail) {
      toast({
        title: "Email required",
        description: "Please enter an email address to share with.",
        variant: "destructive",
      })
      return
    }

    console.log(`Sharing report ${currentReportId} with ${shareEmail}`)

    setSavedReports(
      savedReports.map((report) => (report.id === currentReportId ? { ...report, shared: true } : report)),
    )

    toast({
      title: "Report shared",
      description: `The report has been shared with ${shareEmail}.`,
      variant: "default",
    })

    setShareEmail("")
    setShareMessage("")
    setShareDialogOpen(false)
    setCurrentReportId(null)
  }

  // Get chart icon based on type
  const getChartIcon = (type: string) => {
    switch (type) {
      case "bar":
        return <BarChart className="h-5 w-5" />
      case "pie":
        return <PieChart className="h-5 w-5" />
      case "line":
        return <LineChart className="h-5 w-5" />
      default:
        return <BarChart className="h-5 w-5" />
    }
  }

  // Function to download the report as PDF
  const downloadReport = async (report: Report) => {
    if (!session?.user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to download reports",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Parse the notes field to get properties and fields
      let reportData;
      try {
        const notes = typeof report.notes === 'string' 
          ? JSON.parse(report.notes) 
          : report.notes;
        
        reportData = {
          ...report,
          type: report.type || 'bar',
          properties: notes?.properties || [],
          fields: notes?.fields || [],
          notes: report.notes
        };
      } catch (parseError) {
        console.error('Error parsing report notes:', parseError);
        // If parsing fails, use the report as is
        reportData = {
          ...report,
          type: report.type || 'bar',
          properties: report.properties || [],
          fields: report.fields || [],
          notes: report.notes
        };
      }

      // Set the state for the hidden chart renderer
      setReportToCapture(reportData);

      // Wait for the chart to render
      await new Promise(resolve => setTimeout(resolve, 2000));

      const chartContainer = document.getElementById('hidden-chart-container');
      if (!chartContainer) {
        throw new Error('Chart container not found');
      }

      // Generate canvas with error handling
      let canvas;
      try {
        canvas = await html2canvas(chartContainer, {
          scale: 2,
          useCORS: true,
          logging: true,
          backgroundColor: '#ffffff',
          allowTaint: true,
          foreignObjectRendering: true,
          onclone: (clonedDoc) => {
            // Ensure the cloned document has the correct styles
            const style = clonedDoc.createElement('style');
            style.textContent = `
              .recharts-wrapper { background: white; }
              .recharts-surface { background: white; }
            `;
            clonedDoc.head.appendChild(style);
          }
        });
      } catch (canvasError) {
        console.error('Error generating canvas:', canvasError);
        throw new Error('Failed to generate chart image');
      }

      if (!canvas) {
        throw new Error('Canvas generation failed');
      }

      const imgData = canvas.toDataURL('image/png');
      if (!imgData) {
        throw new Error('Failed to generate image data');
      }

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pdfWidth - (2 * margin);
      const contentHeight = pdfHeight - (2 * margin);

      // Add report title and description
      pdf.setFontSize(20);
      const title = report.title || report.name || 'Untitled Report';
      pdf.text(title, margin, margin + 10);
      
      if (report.description) {
        pdf.setFontSize(12);
        const splitDescription = pdf.splitTextToSize(report.description, contentWidth);
        pdf.text(splitDescription, margin, margin + 20);
      }

      // Add the chart with error handling
      try {
        const imgWidth = contentWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', margin, margin + 30, imgWidth, imgHeight);
      } catch (imageError) {
        console.error('Error adding image to PDF:', imageError);
        throw new Error('Failed to add chart to PDF');
      }

      // Add metadata
      pdf.setProperties({
        title: title,
        subject: 'Property Report',
        author: session.user.name || 'User',
        keywords: 'property, report, chart',
        creator: 'Wealth Management System'
      });

      // Save the PDF with a clean filename
      const cleanTitle = title
        .split('_')
        .slice(0, -1)
        .join('_')
        .replace(/\s+/g, '_');
      
      const filename = `${cleanTitle}_Report.pdf`;
      pdf.save(filename);
      
      toast({
        title: "Success",
        description: "Report downloaded successfully",
        variant: "default",
      });
    } catch (err) {
      console.error('Error downloading report:', err);
      setError(err instanceof Error ? err.message : 'Failed to download report');
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : 'Failed to download report',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Please log in to access reports</div>;
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Create Report</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Details</CardTitle>
              <CardDescription>Enter the basic information for your report</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reportName">Report Name</Label>
                  <Input
                    id="reportName"
                    placeholder="Enter report name"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="chartType">Chart Type</Label>
                  <Select value={chartType} onValueChange={(value) => setChartType(value as Report['type'])}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select chart type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="pie">Pie Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reportDescription">Description</Label>
                <Textarea
                  id="reportDescription"
                  placeholder="Enter report description"
                  value={reportDescription}
                  onChange={(e) => setReportDescription(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property Selection */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Select Properties</CardTitle>
                <CardDescription>Choose the properties to include in your report</CardDescription>
              </CardHeader>
              <div className="relative mx-4 mb-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search properties by name, location, or value..."
                    className="pl-9 w-full"
                    value={propertySearchTerm}
                    onChange={(e) => setPropertySearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="selectAll"
                      checked={selectedProperties.length === filteredProperties.length && filteredProperties.length > 0}
                      onCheckedChange={selectAllProperties}
                    />
                    <Label htmlFor="selectAll">Select All</Label>
                  </div>

                  <Select value={propertyFilter} onValueChange={setPropertyFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by confidence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      <SelectItem value="high">High Confidence</SelectItem>
                      <SelectItem value="medium">Medium Confidence</SelectItem>
                      <SelectItem value="low">Low Confidence</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 max-h-[300px] overflow-y-auto">
                    {filteredProperties.map((property) => (
                      <div key={property.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={property.id}
                          checked={selectedProperties.includes(property.id)}
                          onCheckedChange={() => toggleProperty(property.id)}
                        />
                        <div>
                          <Label htmlFor={property.id} className="font-medium">
                            {property.type ? capitalizeFirstLetter(property.type) : 'Unknown'} {property.city}
                          </Label>
                          <p className="text-sm text-gray-500">{property.address}</p>
                          <p className="text-sm text-gray-500">Value: {property.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  {selectedProperties.length} of {filteredProperties.length} properties selected
                </div>
              </CardContent>
            </Card>

            {/* Data Fields */}
            <Card>
              <CardHeader>
                <CardTitle>Data Fields</CardTitle>
                <CardDescription>Select fields to include in your report</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {availableFields.map((field) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`field-${field.id}`}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => toggleField(field.id)}
                      />
                      <Label htmlFor={`field-${field.id}`}>{field.label}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={saveReport}
                  disabled={!reportName || selectedProperties.length === 0 || selectedFields.length === 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Report
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Report Preview for Create Tab */}
          {selectedProperties.length > 0 && selectedFields.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Report Preview</CardTitle>
                <CardDescription>Preview of your custom report</CardDescription>
              </CardHeader>
              <CardContent ref={createChartRef} className="flex justify-center p-4">
                <ReportChartRenderer
                  report={{
                    id: 'current-preview', // Dummy ID for current preview
                    name: reportName,
                    description: reportDescription,
                    created: '',
                    type: chartType,
                    properties: selectedProperties,
                    fields: selectedFields,
                    shared: false,
                  }}
                  availableFields={availableFields}
                  trendingProperties={properties}
                  COLORS={COLORS}
                  isDownloadPreview={false} // This is the visible preview, not for download
                />
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Report Preview</CardTitle>
                <CardDescription>Preview of your custom report</CardDescription>
              </CardHeader>
              <CardContent className="text-center p-8 text-gray-500">
                Select properties and fields to see a chart preview.
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedReports.map((report) => {
              // Parse the notes field to get properties and fields
              let reportData;
              try {
                const notes = typeof report.notes === 'string' 
                  ? JSON.parse(report.notes) 
                  : report.notes;
                
                reportData = {
                  ...report,
                  properties: notes?.properties || [],
                  fields: notes?.fields || []
                };
              } catch (parseError) {
                console.error('Error parsing report notes:', parseError);
                reportData = {
                  ...report,
                  properties: [],
                  fields: []
                };
              }

              return (
                <Card key={report.id}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        {getChartIcon(report.type)}
                        <CardTitle className="ml-2">{report.name}</CardTitle>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" onClick={() => deleteReport(report.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Created:</span>
                        <span>{report.created}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Properties:</span>
                        <span>{reportData.properties.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Fields:</span>
                        <span>{reportData.fields.map((fieldId: string) => availableFields.find(f => f.id === fieldId)?.label || fieldId).join(', ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Shared:</span>
                        <span>{report.shared ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="outline" size="sm" onClick={() => downloadReport(report)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openShareDialog(report.id)}>
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}

            {/* Add New Report Card */}
            <Card
              className="flex flex-col items-center justify-center h-[300px] border-dashed cursor-pointer hover:bg-gray-50"
              onClick={() => setActiveTab("create")}
            >
              <Plus className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 font-medium">Create New Report</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Hidden div for chart rendering specifically for html2canvas capture */}
      <div
        id="hidden-chart-container"
        ref={hiddenChartRef}
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '0',
          width: '800px',
          height: '600px',
          overflow: 'hidden',
          backgroundColor: 'white',
          padding: '30px',
          zIndex: -1,
        }}
      >
        {reportToCapture && (
          <div className="w-full h-full">
            <h2 className="text-2xl font-bold mb-4">{reportToCapture.name || reportToCapture.title || 'Untitled Report'}</h2>
            {reportToCapture.description && (
              <p className="text-gray-600 mb-6">{reportToCapture.description}</p>
            )}
            <ReportChartRenderer
              report={{
                id: reportToCapture.id,
                name: reportToCapture.name || reportToCapture.title,
                description: reportToCapture.description,
                created: reportToCapture.created,
                type: reportToCapture.type || 'bar',
                properties: reportToCapture.properties || [],
                fields: reportToCapture.fields || [],
                shared: reportToCapture.shared || false,
                notes: reportToCapture.notes
              }}
              availableFields={availableFields}
              trendingProperties={properties}
              COLORS={COLORS}
              isDownloadPreview={true}
            />
          </div>
        )}
      </div>

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Report</DialogTitle>
            <DialogDescription>Share this report with team members or stakeholders.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Enter email address"
                type="email"
                value={shareEmail}
                onChange={(e) => setShareEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a message"
                value={shareMessage}
                onChange={(e) => setShareMessage(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShareDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={shareReport}>Share Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CustomReports