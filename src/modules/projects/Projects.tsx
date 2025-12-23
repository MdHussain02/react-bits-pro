import GlassSurface from "../../components/GlassSurface";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with real-time inventory and smooth animations",
    tags: ["React", "Node.js", "Stripe"],
    color: ["#ff5c7a", "#ff8a5c"],
  },
  {
    title: "3D Portfolio",
    description: "Interactive 3D portfolio website with custom WebGL shaders",
    tags: ["Three.js", "WebGL", "GSAP"],
    color: ["#5c7aff", "#5cffff"],
  },
  {
    title: "Music Visualizer",
    description: "Real-time audio visualization using Web Audio API and canvas",
    tags: ["Canvas", "Web Audio", "React"],
    color: ["#a855f7", "#ec4899"],
  },
  {
    title: "AI Chat Interface",
    description: "Beautiful chat interface with streaming responses and markdown support",
    tags: ["TypeScript", "OpenAI", "Tailwind"],
    color: ["#22c55e", "#14b8a6"],
  },
];

export default function Projects() {
  return (
    <>
      {/* Projects Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          A selection of my recent work, showcasing creative development and design
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassSurface
              key={index}
              width="100%"
              height={280}
              displace={0.15}
              distortionScale={-140}
              opacity={0.8}
              brightness={50}
              borderRadius={20}
              redOffset={10}
              blueOffset={15}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="w-12 h-12 rounded-xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${project.color[0]}, ${project.color[1]})`,
                    }}
                  />
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </>
  );
}
