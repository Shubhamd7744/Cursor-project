import Header from "@/components/layout/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About AI Media Carousel Maker</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p>
              AI Media Carousel Maker is a cutting-edge tool that transforms your text content into 
              visually stunning carousel presentations using artificial intelligence.
            </p>
            
            <h2>How It Works</h2>
            <ol>
              <li>Paste your text content into our editor</li>
              <li>Our AI analyzes your content and identifies key points</li>
              <li>The system automatically generates visually appealing slides</li>
              <li>Review and customize your carousel</li>
              <li>Export and share your presentation</li>
            </ol>
            
            <h2>Features</h2>
            <ul>
              <li>Intelligent content analysis and organization</li>
              <li>Beautiful, customizable templates</li>
              <li>AI-powered visual element selection</li>
              <li>Easy export and sharing options</li>
              <li>Fast and efficient workflow</li>
            </ul>
            
            <h2>Our Mission</h2>
            <p>
              We aim to revolutionize content creation by making it easier than ever to transform 
              text into engaging visual presentations. Our AI-powered platform saves you time 
              while ensuring professional, high-quality results.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 