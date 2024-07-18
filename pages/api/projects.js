// pages/projects.js
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const projects = [
  {
    title: "StackOverflow Simulation",
    description: "Built a MERN-based 3-tier distributed app leveraging GraphQL, Kafka and Redux state management.",
    link: "#",
  },
  {
    title: "Visual Analytics Tool",
    description: "Developed a dynamic analytical dashboard with React, D3, & Python, integrated MongoDB for robust data management.",
    link: "#",
  },
  {
    title: "OfficeFlow Pro",
    description: "Created bulk operation APIs using Spring Boot, reducing overhead by 80% for seat reservations and employee creation.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <Header title="Projects" subtitle="A showcase of my work" />
      <section className="container mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
