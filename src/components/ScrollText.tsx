import { useEffect, useRef, useState } from "react";

interface ScrollTextProps {
    text: string;
    className?: string;
}

export default function ScrollText({ text, className = "" }: ScrollTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [highlightedWords, setHighlightedWords] = useState<number>(0);
    const [isInView, setIsInView] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [blur, setBlur] = useState(0);

    // Split text into words
    const words = text.split(" ");

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress based on container position
            const containerHeight = containerRef.current.offsetHeight;
            const scrollableHeight = containerHeight - windowHeight;

            // How far we've scrolled into the container
            const scrolledIntoView = -rect.top;

            // Check if we're in the active scroll zone
            const inActiveZone = scrolledIntoView >= 0 && scrolledIntoView <= scrollableHeight;
            setIsInView(inActiveZone || scrolledIntoView > scrollableHeight);

            if (scrolledIntoView >= 0 && scrolledIntoView <= scrollableHeight) {
                // Calculate progress (0 to 1)
                const progress = scrolledIntoView / scrollableHeight;

                // Calculate how many words should be highlighted
                const wordsToHighlight = Math.ceil(progress * words.length);
                setHighlightedWords(Math.min(wordsToHighlight, words.length));

                // Calculate fade-in blur at the start (first 10% of scroll)
                const fadeInBlur = progress < 0.1 ? (1 - progress / 0.1) * 10 : 0;

                // Calculate fade-out after all words are revealed
                if (wordsToHighlight >= words.length) {
                    // After all words are highlighted, start fading out
                    const fadeProgress = (progress - 0.7) / 0.3; // Fade in last 30% of scroll
                    const newOpacity = Math.max(0, 1 - Math.max(0, fadeProgress));
                    const fadeOutBlur = Math.max(0, fadeProgress) * 10;
                    setOpacity(newOpacity);
                    setBlur(fadeOutBlur);
                } else {
                    setOpacity(1);
                    setBlur(fadeInBlur);
                }
            } else if (scrolledIntoView > scrollableHeight) {
                // Fully scrolled through - highlight all and fade out
                setHighlightedWords(words.length);
                setOpacity(0);
                setBlur(10);
            } else {
                // Not yet in view - highlight none
                setHighlightedWords(0);
                setOpacity(1);
                setBlur(10);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [words.length]);

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ height: `${Math.max(200, words.length * 15)}vh` }}
        >
            {isInView && (
                <div
                    className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-500"
                    style={{ opacity }}
                >
                    <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-relaxed px-4 max-w-6xl">
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className={`inline-block transition-all duration-300 ease-out mr-3 md:mr-4 ${index < highlightedWords
                                    ? "text-white opacity-100"
                                    : "text-gray-600 opacity-40"
                                    }`}
                                style={{
                                    transitionDelay: `${(index % 5) * 30}ms`,
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </div>
            )}
        </div>
    );
}
