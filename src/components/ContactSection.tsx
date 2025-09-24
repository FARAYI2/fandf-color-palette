import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, MessageCircle, Music, Facebook } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: MessageCircle, label: "WhatsApp", href: "#" },
    { icon: Music, label: "TikTok", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Get in touch with us for inquiries, consultations, or collaborations. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-medium border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-32 bg-background border-border resize-none"
                  />
                </div>
                
                <Button size="lg" variant="default" className="w-full">
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Connect with us
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Follow our journey on social media to see our latest projects, 
                color inspirations, and behind-the-scenes moments.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 text-foreground hover:text-primary"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-muted border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Ready to transform your space?
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you're planning a complete renovation or a simple refresh, 
                  our team is ready to help you achieve the perfect finish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;