import { PropertyQuery } from "@/components/PropertyQuery";

export default function AIAssistantPage() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">AI Property Assistant</h1>
        <p className="text-muted-foreground mb-8">
          Ask questions about properties, owners, market trends, and more. Our AI assistant will help you find the information you need.
        </p>
        <PropertyQuery />
      </div>
    </div>
  );
} 