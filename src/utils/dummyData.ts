
import { Template } from '../components/TemplateSelector';
import { Slide } from '../components/CarouselPreview';

// Sample templates data
export const sampleTemplates: Template[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    thumbnail: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Clean and minimal design with focus on content.'
  },
  {
    id: 'gradient',
    name: 'Gradient',
    thumbnail: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Beautiful gradient backgrounds for visual impact.'
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    thumbnail: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Dark theme for elegant presentations.'
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Bold colors and designs for standout content.'
  }
];

// Generate demo slides based on input text and template
export const generateDemoSlides = (text: string, templateId: string): Slide[] => {
  // This is a simplified version of what an AI model would do
  // In a real app, this would be replaced with API calls to AI services
  
  const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
  
  // Generate up to 5 slides for the demo
  const slides: Slide[] = [];
  
  for (let i = 0; i < Math.min(paragraphs.length, 5); i++) {
    const slide: Slide = {
      id: `slide-${i}`,
      content: paragraphs[i],
    };
    
    // Add template-specific styling
    switch (templateId) {
      case 'minimal':
        slide.backgroundColor = '#ffffff';
        break;
      case 'gradient':
        // No background image needed as we use CSS gradient
        break;
      case 'dark':
        slide.backgroundColor = '#121212';
        break;
      case 'vibrant':
        slide.backgroundColor = '#fcfcfc';
        break;
      default:
        slide.backgroundColor = '#ffffff';
    }
    
    slides.push(slide);
  }
  
  // If there are less than 3 paragraphs, generate some additional slides
  if (slides.length < 3) {
    const sentences = text.split('. ').filter(s => s.trim().length > 0);
    
    for (let i = slides.length; i < Math.min(sentences.length, 3); i++) {
      slides.push({
        id: `slide-${i}`,
        content: sentences[i] + (sentences[i].endsWith('.') ? '' : '.'),
        backgroundColor: templateId === 'dark' ? '#121212' : '#ffffff'
      });
    }
  }
  
  return slides;
};
