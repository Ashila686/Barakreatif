import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Packages() {
  const packages = [
    {
      name: "Photo Documentation",
      price: "Mulai dari Rp1.000.000",
      features: [
        "1 fotografer",
        "Dokumentasi acara",
        "Editing foto",
        "File digital high quality",
      ],
      popular: false,
    },
    {
      name: "Video Documentation",
      price: "Mulai dari Rp1.000.000",
      features: [
        "1 videografer",
        "Highlight video/event coverage",
        "Editing video",
      ],
      popular: false,
    },
    {
      name: "Photo + Video Bundle",
      price: "Mulai dari Rp 1.800.000",
      features: [
        "1 fotografer + 1 videografer",
        "Dokumentasi lengkap",
        "Harga lebih hemat",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Service Packages
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Pilih paket yang sesuai dengan kebutuhan project visual Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-background border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-primary/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                  Paling Populer
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{pkg.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>{pkg.price}</div>

              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p
        className="text-center text-base italic text-muted-foreground mt-10"
        style={{ fontFamily: "Raleway, sans-serif" }}
        >
         * Harga yang tertera merupakan harga awal dan dapat
        disesuaikan melalui diskusi berdasarkan kebutuhan
        serta ruang lingkup project Anda.
      </p>
      </div>
    </section>
  );
}
