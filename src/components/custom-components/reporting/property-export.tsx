"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Download, FileText, Search, Table } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { getProperties } from "@/lib/api/properties"
import { createReport } from "@/lib/api/reports"
import { format } from "date-fns"

interface Property {
  id: string
  address: string
  price: number
  area: number
  type: string
  city: string
  confidence: number
  updatedAt: string
  views: number
  ownerType?: string
}

export default function PropertyExport() {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([])
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedFormat, setSelectedFormat] = useState("csv")
  const [selectedFields, setSelectedFields] = useState<string[]>([
    "address",
    "price",
    "area",
    "type",
    "city",
    "confidence",
  ])
  const [isExporting, setIsExporting] = useState(false)
  const [propertyFilter, setPropertyFilter] = useState("all")
  const [propertySearchTerm, setPropertySearchTerm] = useState("")

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
  }, []);

  // Available export formats
  const exportFormats = [
    { id: "csv", label: "CSV", icon: <FileText className="h-4 w-4" /> },
    { id: "excel", label: "Excel", icon: <Table className="h-4 w-4" /> },
    { id: "json", label: "JSON", icon: <FileText className="h-4 w-4" /> },
  ]

  // Available fields for export
  const availableFields = [
    { id: "address", label: "Address" },
    { id: "price", label: "Property Value" },
    { id: "area", label: "Square Footage" },
    { id: "type", label: "Property Type" },
    { id: "city", label: "Region" },
    { id: "confidence", label: "Confidence Level" },
    { id: "updatedAt", label: "Last Updated" },
    { id: "views", label: "View Count" },
    { id: "ownerType", label: "Owner Type" },
  ]

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Get the selected properties data
      const selectedPropertiesData = properties.filter(p => selectedProperties.includes(p.id));
      
      // Create the export data based on selected fields
      const exportData = selectedPropertiesData.map(property => {
        const data: any = {};
        selectedFields.forEach(field => {
          switch (field) {
            case 'address':
              data[field] = property.address;
              break;
            case 'price':
              data[field] = property.price;
              break;
            case 'area':
              data[field] = property.area;
              break;
            case 'type':
              data[field] = property.type;
              break;
            case 'city':
              data[field] = property.city;
              break;
            case 'confidence':
              data[field] = property.confidence;
              break;
            case 'updatedAt':
              data[field] = new Date(property.updatedAt).toLocaleDateString();
              break;
            case 'views':
              data[field] = property.views || 0;
              break;
            case 'ownerType':
              data[field] = property.ownerType || 'Unknown';
              break;
          }
        });
        return data;
      });

      // Create a report for this export
      const report = await createReport({
        title: `Property Export ${format(new Date(), 'MMM dd, yyyy')}`,
        description: `Export of ${selectedProperties.length} properties in ${selectedFormat.toUpperCase()} format`,
        reportType: selectedFormat,
        exported: true,
        notes: JSON.stringify({
          properties: selectedProperties,
          fields: selectedFields
        })
      });

      // Generate the file based on format
      let fileContent: string;
      let fileType: string;
      let fileName: string;

      switch (selectedFormat) {
        case 'csv':
          // Convert to CSV
          const headers = selectedFields.map(field => 
            availableFields.find(f => f.id === field)?.label || field
          );
          const csvRows = [
            headers.join(','),
            ...exportData.map(row => 
              selectedFields.map(field => {
                const value = row[field];
                // Handle values that might contain commas
                return typeof value === 'string' && value.includes(',') 
                  ? `"${value}"` 
                  : value;
              }).join(',')
            )
          ];
          fileContent = csvRows.join('\n');
          fileType = 'text/csv';
          fileName = `property_export_${format(new Date(), 'yyyy-MM-dd')}.csv`;
          break;

        case 'excel':
          // For Excel, we'll create a CSV that Excel can open
          const excelHeaders = selectedFields.map(field => 
            availableFields.find(f => f.id === field)?.label || field
          );
          const excelRows = [
            excelHeaders.join('\t'),
            ...exportData.map(row => 
              selectedFields.map(field => row[field]).join('\t')
            )
          ];
          fileContent = excelRows.join('\n');
          fileType = 'application/vnd.ms-excel';
          fileName = `property_export_${format(new Date(), 'yyyy-MM-dd')}.xls`;
          break;

        case 'json':
          fileContent = JSON.stringify(exportData, null, 2);
          fileType = 'application/json';
          fileName = `property_export_${format(new Date(), 'yyyy-MM-dd')}.json`;
          break;

        default:
          throw new Error('Unsupported export format');
      }

      // Create and download the file
      const blob = new Blob([fileContent], { type: fileType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Export Successful",
        description: `Your data has been exported in ${selectedFormat.toUpperCase()} format.`,
      });
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your data.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  const toggleProperty = (propertyId: string) => {
    setSelectedProperties(prev =>
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const toggleField = (fieldId: string) => {
    setSelectedFields(prev =>
      prev.includes(fieldId)
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.address.toLowerCase().includes(propertySearchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(propertySearchTerm.toLowerCase());
    const matchesFilter = propertyFilter === "all" || property.type === propertyFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Property Selection */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Select Properties</CardTitle>
            <CardDescription>Choose the properties you want to export</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search Bar */}
            <div className="mb-4">
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

            {/* Property List */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {filteredProperties.map((property) => (
                <div key={property.id} className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded-md">
                  <Checkbox
                    id={`property-${property.id}`}
                    checked={selectedProperties.includes(property.id)}
                    onCheckedChange={() => toggleProperty(property.id)}
                  />
                  <Label htmlFor={`property-${property.id}`} className="flex-1">
                    {property.address}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>Configure your export settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Format Selection */}
              <div className="space-y-2">
                <Label>Export Format</Label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    {exportFormats.map((format) => (
                      <SelectItem key={format.id} value={format.id}>
                        <div className="flex items-center">
                          {format.icon}
                          <span className="ml-2">{format.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Field Selection */}
              <div className="space-y-2">
                <Label>Fields to Export</Label>
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
              </div>

              <Button
                className="w-full"
                onClick={handleExport}
                disabled={isExporting || selectedProperties.length === 0 || selectedFields.length === 0}
              >
                {isExporting ? (
                  <span>Exporting...</span>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
