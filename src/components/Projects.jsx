import { useState } from "react";

function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Library Management",
      desc: "Python Desktop App"
    },
    {
      title: "Flood Prediction",
      desc: "ML + GIS Model"
    },
    {
      title: "Portfolio",
      desc: "React Website"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className="project-card"
            key={i}
            onClick={() => setSelected(p)}
          >
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <h3>{selected.title}</h3>
            <p>{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;