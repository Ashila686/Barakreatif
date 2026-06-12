import { Camera, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-primary/20 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-8 h-8 text-primary" />
              <span
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                BARA KREATIF
              </span>
            </div>
            <p
              className="text-sm text-muted-foreground leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Bara Kreatif adalah penyedia jasa fotografi dan videografi profesional di Jabodetabek yang melayani dokumentasi event, corporate, seminar, wisuda, branding, dan kebutuhan visual kreatif lainnya di Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
            </p>
          </div>

          <div>
            <h4
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com/bara_kreatif"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:bara.kreatif2015@gmail.com"
                className="w-10 h-10 bg-background border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/6285179935803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
            </div>
            <div className="space-y-1">
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                @bara_kreatif
              </p>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                bara.kreatif2015@gmail.com
              </p>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                +62 851-7993-5803
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <div
            className="text-sm text-muted-foreground text-center"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            © 2026 Bara Kreatif. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
