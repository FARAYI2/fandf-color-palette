import { Button } from "@/components/ui/button";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioLiving from "@/assets/portfolio-living.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";

const PortfolioSection = () => {
  const portfolioImages = [
    {
      src: portfolioKitchen,
      alt: "Modern kitchen with painted cabinets"
    },
    {
      src: portfolioLiving,
      alt: "Living room with accent wall"
    },
    {
      src: portfolioBathroom,
      alt: "Bathroom with calming paint colors"
    },
    {
      src: portfolioKitchen,
      alt: "Contemporary painted interior"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Creations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the transformative power of premium paint through our showcase of past projects. 
            Each space tells a unique story of color, craftsmanship, and creative vision brought to life.
          </p>
          
          <Button size="lg" variant="premium" className="px-8">
            Connect with Us
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-large transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;