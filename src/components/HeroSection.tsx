import { Button } from "@/components/ui/button";
import logoImage from "@/assets/ff-paints-logo.png";
import heroInterior from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroInterior}
          alt="Beautiful painted interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12">
          <img
            src={logoImage}
            alt="F&F Paints Logo"
            className="w-32 h-32 mx-auto mb-8 object-contain"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Precision. Quality. Color.
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
          Exquisite Paints | Vibrant Shades.
        </p>

        {/* CTA Button */}
        <Button size="lg" variant="hero" className="text-lg px-8 py-6">
          Explore Our Collections
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-muted-foreground/30"></div>
      </div>
    </section>
  );
};

export default HeroSection;