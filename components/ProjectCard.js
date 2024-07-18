// components/ProjectCard.js
const ProjectCard = ({ title, description, link }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href={link} className="text-blue-500 underline">
          View Project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  