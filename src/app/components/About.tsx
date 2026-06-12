import { motion } from "motion/react";
import { Briefcase, Users, Award, Clock } from "lucide-react";

import heroImage from "@/imports/logo-tipografi.png";

export function About() {
  const stats = [
    { icon: Briefcase, label: "Projects", value: "500+" },
    { icon: Users, label: "Clients", value: "300+" },
    { icon: Award, label: "Years Experience", value: "11" },
  ];

  const values = ["Professional", "Creative", "Modern", "Adaptive", "Human"];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={heroImage}
              alt="Bara Kreatif"
              className="w-[1200px] h-[180px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              About Us
            </h2>
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Bara Kreatif merupakan jasa fotografi dan videografi profesional di wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang dan Bekasi) yang melayani dokumentasi event, kegiatan corporate, serta kebutuhan branding visual. Dengan pendekatan kreatif dan profesional, kami membantu mengabadikan setiap momen menjadi karya visual yang berkesan.
            </p>

<div className="flex flex-wrap gap-3 mb-8">
  {values.map((value, index) => (
    <span
      key={index}
      className="px-4 py-2 rounded-full text-sm font-medium text-white border-0"
      style={{
        fontFamily: "Raleway, sans-serif",
        backgroundColor: "#FF7A1F",
      }}
    >
      {value}
    </span>
  ))}
</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div
                className="text-3xl font-bold text-foreground mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
