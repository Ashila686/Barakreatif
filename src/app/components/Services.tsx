import { motion } from "motion/react";
import { Camera, Video, Users, Package, Scissors, MessageCircle } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Camera,
      title: "Fotografi",
      description: "Layanan fotografi profesional di Jabodetabek untuk event, corporate, seminar, dan kebutuhan dokumentasi lainnya.",
    },
    {
      icon: Video,
      title: "Videografi",
      description: "Produksi video profesional dengan konsep cinematic dan storytelling untuk brand, event, serta kebutuhan promosi bisnis.",
    },
    {
      icon: Users,
      title: "Dokumentasi Event & Corporate",
      description: "Dokumentasi event corporate, kampus, dan berbagai acara spesial",
    },
    {
      icon: Scissors,
      title: "Produksi Konten Kreatif",
      description: "Layanan editing video, color grading, motion graphics, dan finishing berkualitas",
    },
    {
      icon: MessageCircle,
      title: "Layanan lainnya",
      description: "Dapat dipertimbangkan bersama melalui diskusi",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Services
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Layanan visual kreatif yang kami tawarkan untuk memenuhi kebutuhan brand dan bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group"
            >
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
