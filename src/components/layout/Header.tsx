import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          {/* Placeholder Logo - Replace with actual SVG or Image */}
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
            AI
          </div>
          <span className="font-bold text-lg">Clickspark</span> {/* Assuming brand name */} 
        </Link>

        {/* Navigation Links & Actions */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Templates</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </div>
          {/* TODO: Add Mobile Menu Toggle Button */}
        </div>
      </div>
    </header>
  );
};

export default Header; 