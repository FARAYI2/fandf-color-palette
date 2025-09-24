import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Beaker, RefreshCw } from "lucide-react";
import serviceInterior from "@/assets/service-interior.jpg";
import servicePaintTools from "@/assets/service-paint-tools.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Premium Paint Collections",
      description: "Curated selection of high-quality paints in endless colors and finishes for every project."
    },
    {
      icon: Users,
      title: "Color Consultation",
      description: "Expert guidance from our color specialists to help you choose the perfect palette."
    },
    {
      icon: Beaker,
      title: "Bespoke Paint Blending",
      description: "Custom color matching and blending services for unique and personalized finishes."
    },
    {
      icon: RefreshCw,
      title: "Restoration & Enhancement",
      description: "Professional restoration services to revitalize and enhance existing painted surfaces."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
        </div>

        {/* Service Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-medium">
            <img
              src={serviceInterior}
              alt="Elegant interior design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-medium">
            <img
              src={servicePaintTools}
              alt="Professional paint tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" variant="premium" className="px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;