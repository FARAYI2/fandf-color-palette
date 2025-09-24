const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Welcome to F&F Paints
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            For over three decades, F&F Paints has been at the forefront of producing 
            premium paints, pigments, and finishes that transform spaces into works of art. 
            Our commitment to excellence and innovation has made us a trusted partner for 
            homeowners, designers, and professionals alike.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every product in our collection reflects our dedication to quality craftsmanship, 
            sustainable practices, and the perfect balance of beauty and durability. From 
            subtle neutrals to bold statement colors, we bring your vision to life with 
            unmatched precision and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;