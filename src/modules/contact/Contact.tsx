import { useState } from "react";
import GlassSurface from "../../components/GlassSurface";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>



      {/* Contact Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 transition-opacity duration-5000 ease-in-out">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Have a project in mind? Let's create something amazing together.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassSurface
            width="100%"
            height="auto"
            displace={0.1}
            distortionScale={-130}
            opacity={0.85}
            brightness={45}
            borderRadius={24}
          >
            <form onSubmit={handleSubmit} className="p-8 space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </GlassSurface>

          {/* Contact Info */}
          <div className="space-y-6">
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
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:hello@johndoe.dev"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@johndoe.dev
                </a>
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
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-300">San Francisco, CA</p>
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
                <h3 className="text-lg font-semibold mb-4">Social</h3>
                <div className="flex gap-4">
                  {["GitHub", "Twitter", "LinkedIn", "Dribbble"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>
    </>
  );
}
