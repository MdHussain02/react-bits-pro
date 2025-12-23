import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ColorBends from "./ColorBends";
import PageTransition from "./PageTransition";

const Layout = () => {
    const location = useLocation();

    return (
        <div className="bg-black text-white relative min-h-screen font-sans">
            {/* Shared Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ColorBends
                    style={{ width: "100%", height: "100%" }}
                    colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                    rotation={90}
                    speed={0.45}
                    scale={1.5}
                    frequency={1.4}
                    warpStrength={1.1}
                    mouseInfluence={0.8}
                    parallax={0.6}
                    noise={0.1}
                />
            </div>

            {/* Shared Navigation */}
            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 md:p-8 bg-black/30 backdrop-blur-md z-50">
                <Link to="/" className="text-2xl font-bold">
                    Portfolio
                </Link>
                <div className="hidden md:flex gap-8">
                    <Link to="/" className="hover:text-gray-300 transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-gray-300 transition-colors">
                        About
                    </Link>
                    <Link to="/projects" className="hover:text-gray-300 transition-colors">
                        Projects
                    </Link>
                    <Link to="/contact" className="hover:text-gray-300 transition-colors">
                        Contact
                    </Link>
                </div>
                {/* Mobile Menu Icon could go here, for now just simple responsive hiding/showing if needed, 
            but keeping it simple for text links on mobile might be crowded. 
            Let's keep the links visible but maybe smaller gap or wrap? 
            For now, I'll use a simple flex wrap for mobile fallback.
        */}
                <div className="md:hidden flex gap-4 text-sm">
                    <Link to="/projects">Work</Link>
                    <Link to="/contact">Contact</Link>
                    {/* Simplified menu for mobile to avoid overcrowding */}
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="relative z-10 pt-20">
                <AnimatePresence mode="wait">
                    {/* We key the transition by the pathname so it triggers on route change */}
                    <PageTransition key={location.pathname}>
                        <Outlet />
                    </PageTransition>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default Layout;
