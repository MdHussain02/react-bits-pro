import GlassSurface from "../components/GlassSurface";

export default function About() {
  return (
    <>
      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-16">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Glass Card */}
          <div className="flex justify-center">
            <GlassSurface
              width={350}
              height={400}
              displace={0.2}
              distortionScale={-150}
              opacity={0.85}
              brightness={50}
              borderRadius={24}
            >
              <div className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold">
                  JD
                </div>
                <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-300">Creative Developer</p>
              </div>
            </GlassSurface>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <GlassSurface
              width="100%"
              height="auto"
              displace={0.1}
              distortionScale={-120}
              opacity={0.7}
              brightness={45}
              borderRadius={16}
              className="p-6"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">My Story</h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate developer with over 5 years of experience creating
                  beautiful, functional web applications. I specialize in React,
                  TypeScript, and creative coding, always pushing the boundaries of
                  what's possible on the web.
                </p>
              </div>
            </GlassSurface>

            <GlassSurface
              width="100%"
              height="auto"
              displace={0.1}
              distortionScale={-120}
              opacity={0.7}
              brightness={45}
              borderRadius={16}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Three.js", "WebGL", "Node.js", "Figma", "CSS", "GSAP"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>
    </>
  );
}
