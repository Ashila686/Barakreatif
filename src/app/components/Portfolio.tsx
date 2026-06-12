import { motion } from "motion/react";
import { useState } from "react";

import groheSensia from "@/imports/grohe-sensia.jpg";
import lixilOne from "@/imports/lixil-1.jpg";
import loreal from "@/imports/loreal.jpg";
import lixilTwo from "@/imports/lixil-2.jpg";
import americanStandardOne from "@/imports/american-standard-1.jpg";
import americanStandardTwo from "@/imports/american-standard-2.jpg";
import daikinOne from "@/imports/daikin-1.jpg";
import daikinTwo from "@/imports/daikin-2.jpg";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      image: groheSensia,
      category: "Corporate Event",
      title: "Grohe Sensia Product Launch Jakarta",
      location: "Jakarta",
      orientation: "landscape",
    },
    {
      image: lixilOne,
      category: "Corporate Event",
      title: "Lixil Annual Event Tangerang",
      location: "Tangerang",
      orientation: "landscape",
    },
    {
      image: loreal,
      category: "Corporate Event",
      title: "L'Oréal Campaign Jakarta",
      location: "Jakarta",
      orientation: "landscape",
    },
    {
      image: lixilTwo,
      category: "Corporate Meeting",
      title: "Lixil Business Meeting Bekasi",
      location: "Bekasi",
      orientation: "landscape",
    },
    {
      image: americanStandardOne,
      category: "Corporate Dinner",
      title: "American Standard Gala Dinner Bogor",
      location: "Bogor",
      orientation: "portrait",
    },
    {
      image: americanStandardTwo,
      category: "Corporate Dinner",
      title: "American Standard Awarding Night Bogor",
      location: "Bogor",
      orientation: "portrait",
    },
    {
      image: daikinOne,
      category: "Corporate Event",
      title: "Daikin Product Showcase Depok",
      location: "Depok",
      orientation: "portrait",
    },
    {
      image: daikinTwo,
      category: "Corporate Event",
      title: "Daikin Exhibition Jakarta",
      location: "Jakarta",
      orientation: "portrait",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-4 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Portfolio Jasa Fotografi & Videografi Jabodetabek
          </h2>

          <p
            className="text-muted-foreground"
            style={{
              fontFamily: "Raleway, sans-serif",
            }}
          >
            Kumpulan hasil dokumentasi Bara Kreatif dalam layanan jasa fotografi
            Jabodetabek dan fotografer event Jabodetabek untuk corporate event,
            branding, campaign, dan kebutuhan visual profesional di Jakarta,
            Bogor, Depok, Tangerang, dan Bekasi.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(item)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl ${
                item.orientation === "landscape"
                  ? "aspect-[3/2]"
                  : "aspect-[2/3]"
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`${item.title} - Jasa Fotografi ${item.location} oleh Bara Kreatif`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">

                <div className="text-center px-4">

                  <div
                    className="text-xs text-primary mb-2 font-medium tracking-widest uppercase"
                    style={{
                      fontFamily: "Raleway, sans-serif",
                    }}
                  >
                    {item.category}
                  </div>

                  <div
                    className="text-lg font-bold text-white mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    className="text-sm text-white underline underline-offset-4 hover:text-primary transition-colors duration-300"
                    style={{
                      fontFamily: "Raleway, sans-serif",
                    }}
                  >
                    View Full Picture
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl overflow-hidden max-w-5xl w-full relative shadow-2xl"
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              ✕
            </button>

            {/* Modal Image */}
            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} - Dokumentasi Bara Kreatif`}
              className="w-full max-h-[75vh] object-contain bg-black"
            />

            {/* Modal Content */}
            <div className="p-8">

              <div
                className="text-sm text-primary uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                {selectedProject.category}
              </div>

              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {selectedProject.title}
              </h3>

              <p
                className="text-muted-foreground leading-relaxed"
                style={{
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                Project dokumentasi visual oleh Bara Kreatif untuk kebutuhan
                fotografi event dan videografi profesional di{" "}
                {selectedProject.location}. Sebagai penyedia jasa fotografi
                Jabodetabek, kami menghadirkan hasil visual berkualitas tinggi
                untuk corporate event, branding, dan campaign visual.
              </p>

            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}