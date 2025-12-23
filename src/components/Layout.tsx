import { Link, Outlet } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { Menu, X } from "lucide-react";

// Lazy load ColorBends for better initial performance
const ColorBends = lazy(() => import("./ColorBends"));

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showColorBends, setShowColorBends] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Lazy load ColorBends to prevent initial lag
    useEffect(() => {
        // Use requestIdleCallback if available, otherwise fallback to setTimeout
        const loadColorBends = () => {
            setShowColorBends(true);
        };

        if ('requestIdleCallback' in window) {
            const idleId = requestIdleCallback(loadColorBends, { timeout: 1000 });
            return () => cancelIdleCallback(idleId);
        } else {
            const timer = setTimeout(loadColorBends, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="bg-black text-white relative min-h-screen font-sans overflow-x-hidden">
            {/* Shared Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-5000 ease-in-out"
                style={{ opacity: showColorBends ? 1 : 0 }}
            >
                {showColorBends && (
                    <Suspense fallback={null}>
                        <ColorBends
                            style={{ width: "100%", height: "100%" }}
                            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                            rotation={90}
                            speed={0.45}
                            scale={1.5}
                            frequency={1.8}
                            warpStrength={1}
                            mouseInfluence={0.8}
                            parallax={0.6}
                            noise={0.1}
                        />
                    </Suspense>
                )}
            </div>

            {/* Shared Navigation */}
            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 md:p-8 bg-black/30 backdrop-blur-md z-50">
                <Link to="/" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>
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

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white z-50 p-2 cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                        <Link to="/" className="text-2xl font-semibold hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/about" className="text-2xl font-semibold hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                            About
                        </Link>
                        <Link to="/projects" className="text-2xl font-semibold hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                            Projects
                        </Link>
                        <Link to="/contact" className="text-2xl font-semibold hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </div>
                )}
            </nav>

            {/* Main Content Area */}
            <main className="relative z-10 pt-20">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
