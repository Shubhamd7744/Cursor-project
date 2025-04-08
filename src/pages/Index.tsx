import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Carousel Creation Reimagined
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
              The <span className="text-primary">Fastest</span> ⚡ Way to Create Social Media Carousels
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop wasting hours designing carousels. Transform your content into engaging, shareable carousels in minutes with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/signup">Create Your Carousel Free</Link>
              </Button>
              <span className="text-sm text-muted-foreground">No credit card required</span>
            </div>
            <div className="flex justify-center items-center gap-6 text-muted-foreground">
              <span className="text-xs font-semibold">AS SEEN ON</span>
              {/* Placeholder logos - Replace with actual SVGs/Images */}
              <span className="font-medium">Forbes</span>
              <span className="font-medium">TechCrunch</span>
              <span className="font-medium">Product Hunt</span>
            </div>
          </div>
        </section>

        {/* Placeholder for Carousel Examples Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Carousel Examples</h2>
            <div className="h-64 bg-muted rounded-md flex items-center justify-center">
              <p>Carousel examples will go here...</p>
            </div>
          </div>
        </section>

        {/* Placeholder for Features Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Features Section</h2>
            <div className="h-64 bg-primary/80 rounded-md flex items-center justify-center">
              <p>Features details will go here...</p>
            </div>
          </div>
        </section>

        {/* TODO: Add other sections (Demo, Testimonials, CTA) */}

      </main>

      {/* Placeholder for Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          Footer Content Goes Here
        </div>
      </footer>
    </div>
  );
};

export default Index;
