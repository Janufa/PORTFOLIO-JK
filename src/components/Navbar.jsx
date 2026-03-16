import { FaLinkedin, FaGithub, FaBehance} from "react-icons/fa";

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Janufa</h2>

      <ul>
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("skills")}>Skills</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>

      <div className="nav-icons">
        <a
          href="https://www.linkedin.com/in/janufa-karona"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Janufa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.behance.net/janufakarona"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;