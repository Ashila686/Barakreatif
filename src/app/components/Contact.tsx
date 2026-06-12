import { motion } from "motion/react";
import { MessageCircle, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Contact() {
  const contactInfo = [
    { icon: MessageCircle, label: "WhatsApp", value: "+6285179935803" },
    { icon: Mail, label: "Email", value: "bara.kreatif2015@gmail.com" },
    { icon: MapPin, label: "Lokasi", value: "Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)" },
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", link: "@bara_kreatif" },
    { icon: Facebook, label: "Facebook", link: "Bara Kreatif" },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact Us
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Konsultasikan kebutuhan fotografi event, videografi profesional, dan dokumentasi visual untuk area Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div
                    className="text-sm text-muted-foreground mb-1"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {info.label}
                  </div>
                  <div
                    className="text-lg text-foreground font-medium"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
