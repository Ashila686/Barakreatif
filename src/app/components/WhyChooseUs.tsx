import { motion } from "motion/react";
import { Sparkles, Award, Users, Zap, Palette, Heart } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Visual modern & cinematic",
      description:
        "Menghadirkan hasil visual modern dan cinematic untuk kebutuhan dokumentasi event, branding, dan promosi bisnis.",
    },
    {
      icon: Award,
      title: "Hasil profesional dan berkualitas",
      description:
        "Menggunakan peralatan dan teknik profesional untuk menghasilkan kualitas visual yang tinggi dan memuaskan.",
    },
    {
      icon: Users,
      title: "Tim kreatif dan adaptif",
      description:
        "Tim Bara Kreatif siap menangani berbagai project seperti seminar, corporate event, gathering, hingga kebutuhan visual UMKM.",
    },
    {
      icon: Zap,
      title: "Tepat waktu & terpercaya",
      description:
        "Kami memahami pentingnya timeline dalam setiap project dokumentasi dan selalu menjaga komitmen penyelesaian tepat waktu.",
    },
    {
      icon: Heart,
      title: "Komunikasi yang nyaman dengan client",
      description:
        "Komunikasi yang responsif dan profesional membantu kami memahami kebutuhan visual klien secara lebih akurat.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-card">
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
            Why Choose Bara Kreatif?
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Bara Kreatif hadir sebagai partner visual untuk kebutuhan fotografi event, dokumentasi profesional, dan videografi kreatif di wilayah Jabodetabek.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
