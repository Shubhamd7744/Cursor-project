
import React from 'react';

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  templates, 
  selectedTemplate, 
  onSelectTemplate 
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 mt-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4">Choose a template</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer transition-all rounded-md overflow-hidden hover:shadow-md ${
              selectedTemplate === template.id
                ? 'ring-2 ring-accent scale-105'
                : 'border border-gray-200'
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <img
              src={template.thumbnail}
              alt={template.name}
              className="w-full aspect-video object-cover"
            />
            <div className="p-2">
              <h3 className="font-medium text-sm">{template.name}</h3>
              <p className="text-xs text-gray-500 truncate">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
