import { motion } from "motion/react";
import { Star, Camera, MessageCircle, Clock } from "lucide-react";

export function Testimonials() {
  const highlights = [
    {
      title: "Professional Quality Results",
      description:
        "Hasil dokumentasi visual profesional untuk kebutuhan event, perusahaan, dan personal branding.",
      icon: Camera,
      label: "Quality Assured",
      rating: 5,
    },
    {
      title: "Communicative & Responsive",
      description:
        "Tim yang responsif dalam proses briefing, produksi, hingga revisi hasil akhir.",
      icon: MessageCircle,
      label: "Client Focused",
      rating: 5,
    },
    {
      title: "On-Time Delivery",
      description:
        "Setiap project dikerjakan dengan timeline yang jelas dan delivery yang tepat waktu.",
      icon: Clock,
      label: "Reliable Service",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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
            Why Clients Choose Bara Kreatif
          </h2>

          <p
            className="text-muted-foreground"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Dipercaya untuk berbagai kebutuhan fotografer event Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-muted-foreground leading-relaxed mb-8"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <span
                    className="font-medium text-foreground"
                    style={{
                      fontFamily: "Raleway, sans-serif",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}