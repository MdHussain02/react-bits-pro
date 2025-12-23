import GlassSurface from "../../components/GlassSurface";

const projects = [
  {
    title: "SaaS Dashboard Platform",
    description: "Enterprise-grade analytics dashboard with real-time data visualization and team collaboration features",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    color: ["#6366f1", "#8b5cf6"],
  },
  {
    title: "E-Commerce Storefront",
    description: "Full-stack e-commerce platform with cart management, payment integration, and admin panel",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    color: ["#ec4899", "#f43f5e"],
  },
  {
    title: "Component Library",
    description: "Accessible, customizable React component library with 50+ components and comprehensive documentation",
    tags: ["React", "Storybook", "Radix UI", "CSS"],
    color: ["#14b8a6", "#06b6d4"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop, real-time updates, and team workspaces",
    tags: ["React", "Redux Toolkit", "Socket.io", "Node.js"],
    color: ["#f59e0b", "#eab308"],
  },
];

export default function Projects() {
  return (
    <>
      {/* Projects Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Showcasing React applications built with modern tools and best practices
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
