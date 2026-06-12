import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542992933-ce75d0187ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHN0dWRpb3xlbnwxfHx8fDE3Nzk2MjgwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional photographer"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/95 to-primary"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#F5F7FA' }}
        >
          Turning Moments<br />Into Visual Stories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-4 max-w-3xl font-medium leading-relaxed"
          style={{ fontFamily: 'Raleway, sans-serif', color: '#F5F7FA' }}
        >
          Jasa Fotografi dan Videografi Profesional di wilayah Jabodetabek
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg mb-12 max-w-3xl font-normal leading-relaxed opacity-90"
          style={{ fontFamily: 'Raleway, sans-serif', color: '#F5F7FA' }}
        >
          Bara Kreatif menyediakan layanan fotografi dan videografi yang membantu brand, perusahaan, dan individu mengabadikan momen melalui foto dan video berkualitas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-all duration-300 hover:scale-105 font-medium"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            View Portfolio
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
            style={{ fontFamily: 'Raleway, sans-serif', borderColor: '#F5F7FA', color: '#F5F7FA' }}
          >
            Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
