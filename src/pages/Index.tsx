import React, { useState } from 'react';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import TemplateSelector from '../components/TemplateSelector';
import CarouselPreview from '../components/CarouselPreview';
import { Slide } from '../components/CarouselPreview';
import { sampleTemplates } from '../utils/dummyData';
import { processTextWithAI } from '../utils/aiHelpers';

const Index = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const handleTextSubmit = async (text: string) => {
    try {
      const processedSlides = await processTextWithAI(text, selectedTemplate);
      setSlides(processedSlides);
    } catch (error) {
      console.error('Error processing text:', error);
    }
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="mt-8">
        <TextInput onSubmit={handleTextSubmit} />
        <TemplateSelector
          templates={sampleTemplates}
          selectedTemplate={selectedTemplate}
          onTemplateChange={handleTemplateChange}
        />
        {slides.length > 0 && <CarouselPreview slides={slides} />}
      </div>
    </div>
  );
};

export default Index;
