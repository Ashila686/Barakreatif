import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-12 text-center"
          style={{ backgroundColor: '#0B4BB7' }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", color: '#F5F7FA' }}
          >
            Let's Create Meaningful Visuals
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif", color: '#F5F7FA' }}
          >
            Hubungi Bara Kreatif untuk kebutuhan foto dan video profesional Anda.
          </p>

          <a
            href="https://wa.me/6285179935803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-all duration-300 hover:scale-105 font-medium"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
