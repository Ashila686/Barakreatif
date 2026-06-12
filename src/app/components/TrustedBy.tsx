import { motion } from "motion/react";

export function TrustedBy() {
  const clients = [
    { name: "Daikin", logo: "https://th.bing.com/th/id/R.98d4e8cc74753560f5aa5188136864bc?rik=SF73h53j2eC%2fIA&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f03%2fdaikin_logo_dowanload.png&ehk=8nwoGa%2bkJL5K3QVb1851LljS6qrpNd8E4xkqK7qubcQ%3d&risl=&pid=ImgRaw&r=0" },
    { name: "L'Oréal", logo: "https://pluspng.com/img-png/loreal-png-filel-oreal-logo-png-800.png" },
    { name: "American Standard", logo: "https://1000logos.net/wp-content/uploads/2021/06/American-Standard-Logo-768x483.png" },
    { name: "Lixil", logo: "https://cdn-apac.onetrust.com/logos/5c1bccf8-416a-4bef-a301-b20230ece55e/01945d89-5569-793f-aa04-c18fb5b5bb70/c987dad7-2d3d-49cb-ace1-8507a7bfca0e/new_logo.jpeg" },
    { name: "Ghore", logo: "https://tse2.mm.bing.net/th/id/OIP.UIMJfpvPPZUG-2u9SW3GsAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "PUNINAR", logo: "https://1.bp.blogspot.com/-DRMonmfU1TE/W9dqnfd38AI/AAAAAAAAl0M/Q7B2JilRHxchH6CeMwF-Paeu3RKTZXKZACLcBGAs/s1600/logo%2Bpuninar%2Blogistics%2B%25283%2529_2409.png" },
    { name: "Indonesian Nutrition", logo: "https://tse4.mm.bing.net/th/id/OIP.QRJqFeet-CwV-_3OC5r4uAHaDW?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Royal Canin", logo: "https://th.bing.com/th/id/R.b7e576bac3696b33d5ef3bbb65f7e8d7?rik=kRGVSejdVZwcQg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0376%2f6478%2f4520%2fcollections%2fRoyal-Canin-Logo_1200x1200.png%3fv%3d1612732085&ehk=uuyGaSOPV42REX4rJJf1gAgjGR2PhuDGgXj0Vay2Dic%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Tetra Pak", logo: "https://s7g10.scene7.com/is/image/tetrapak/tetra-pak-logotype?wid=600&hei=337&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0" },
    { name: "Pertamina", logo: "https://static.freepnglogo.com/images/all_img/1706437491pertamina-logo-png.png" },
  ];

  return (
    <section id="clients" className="py-16 px-4 md:px-8 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Trusted By
          </h2>
          <p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Dipercaya oleh perusahaan, organisasi, dan berbagai event untuk kebutuhan dokumentasi visual profesional.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex w-max gap-8 items-center"
  >
    {[...clients, ...clients].map((client, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-52 h-28 flex items-center justify-center bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 px-6"
      >
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    ))}
  </motion.div>
</div>
      </div>
    </section>
  );
}
