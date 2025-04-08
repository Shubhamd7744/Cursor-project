import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple design with focus on content",
    preview: "Minimal preview image URL"
  },
  {
    id: "gradient",
    name: "Gradient",
    description: "Modern design with beautiful gradient backgrounds",
    preview: "Gradient preview image URL"
  },
  {
    id: "dark",
    name: "Dark Mode",
    description: "Elegant dark theme for professional presentations",
    preview: "Dark preview image URL"
  },
  {
    id: "vibrant",
    name: "Vibrant",
    description: "Colorful and energetic design for engaging content",
    preview: "Vibrant preview image URL"
  }
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Templates</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose from our collection of professionally designed templates
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <div className="aspect-video bg-muted" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <Button className="w-full">Use Template</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Templates; 