import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Hostel Mess Menu App",
    image: "src/assets/mess.png", // Add your image or use a placeholder
    description:
      "Built a dynamic React-based single-page application for hostel mess menu management with real-time updates and responsive UI.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/SanidhyaAulakh/cu-mess-menu", // Replace with actual URL
    live: "https://cu-mess-menu.vercel.app/", // Replace with live link if available
  },
  {
    title: "IoT Health Monitoring Device",
    image: "/assets/iot-device.png",
    description:
      "Developed a real-time SpO2 and heart rate monitor using ESP32 and MAX30100 sensor with Arduino, ideal for smart healthcare.",
    tech: ["ESP32", "MAX30100", "Arduino", "IoT"],
    github: "https://github.com/yourusername/iot-health-monitor", // Replace
    live: "",
  },
  {
    title: "Customer & Transaction Manager (Java)",
    image: "/assets/java-app.png",
    description:
      "Created a standalone application using Java Swing, AWT, and JDBC to manage customer records and transactions effectively.",
    tech: ["Java", "Swing", "AWT", "JDBC"],
    github: "https://github.com/yourusername/java-customer-app", // Replace
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500 hover:underline flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
