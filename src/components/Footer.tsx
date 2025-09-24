import logoImage from "@/assets/ff-paints-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <img
              src={logoImage}
              alt="F&F Paints Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">F&F Paints</h3>
              <p className="text-primary-foreground/80 text-sm">
                Precision. Quality. Color.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} F&F Paints. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Transforming spaces with exceptional paint solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;