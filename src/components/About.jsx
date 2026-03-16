import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section center-section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="glass-card about-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p>
         I build intelligent, scalable, and user-focused digital solutions by combining strong backend architecture with refined design thinking. Skilled in Python, Django, React, AI/ML (Jupyter Notebook), and Flask, I create high-performance applications that are both visually premium and technically robust.

With a strong foundation in UI/UX principles, I focus on crafting seamless user journeys, intuitive interfaces, and impactful digital experiences. I approach every project with a problem-solving mindset, ensuring that technology not only functions flawlessly but also delivers real value.

I design with purpose. I develop with precision. I innovate with impact.
          
        </p>
      </motion.div>

    </section>
  );
}

export default About;