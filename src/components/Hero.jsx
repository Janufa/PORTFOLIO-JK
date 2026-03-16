import { motion } from "framer-motion";
import profile from "../assets/Janufa.jpeg";
import Resume from "../assets/RESUME.pdf";

function Hero() {
  return (
    <section id="home" className="section hero">

      <div className="hero-container">

        {/* LEFT SIDE TEXT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="gradient-text">
            Hi, I'm Janufa Karona
          </h1>

          <p className="subtitle">
            UI/UX Designer & Python Developer
          </p>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            I design intuitive user experiences and build scalable Python applications.
          </motion.p>
          

          <div className="hero-buttons">
            <a href={Resume} download>
              <button className="primary-btn">
                Download Resume
              </button>
            </a>

            <a href="#contact">
              <button className="outline-btn">
                Hire Me
              </button>
            </a>
          
            <a
                href="mailto:ajanufakarona@gmail.com">
                <button className="contact-btn">
                📧 Email Me
                </button>
            </a>
          </div>
            
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="Janufa" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;