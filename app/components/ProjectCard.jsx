export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#2a2b2e] rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-purple-400 text-purple-400 rounded hover:bg-purple-400 hover:text-white transition-colors"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
