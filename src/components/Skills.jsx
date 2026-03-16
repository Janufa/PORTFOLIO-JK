import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "UI/UX Design", level: "95%" },
    { name: "React", level: "85%" },
    { name: "Django",level: "80%"},
    { name: "Python", level: "88%" },
    { name: "SQL", level: "80%" },
    { name: "AI&ML", level:"85%"}
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      {skills.map((skill, i) => (
        <div className="skill" key={i}>
          <p>{skill.name}</p>
          <div className="progress">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;