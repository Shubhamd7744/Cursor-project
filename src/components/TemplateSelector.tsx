import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Template {
  id: string;
  name: string;
  description: string;
  preview?: string; // URL to a preview image
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onTemplateChange: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  templates, 
  selectedTemplate, 
  onTemplateChange 
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3">Choose a Template</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {templates.map((template) => (
          <Card 
            key={template.id}
            onClick={() => onTemplateChange(template.id)}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md",
              selectedTemplate === template.id ? "ring-2 ring-primary ring-offset-2" : ""
            )}
          >
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-full aspect-video bg-muted rounded-sm mb-2">
                {/* TODO: Display template preview image if available */}
              </div>
              <span className="text-sm font-medium">{template.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
