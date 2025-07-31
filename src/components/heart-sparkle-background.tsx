import { useEffect, useState } from "react";

export const HeartSparkleBackground = () => {
    const [hearts, setHearts] = useState<any[]>([]);
    const [sparkles, setSparkles] = useState<any[]>([]);

    useEffect(() => {
        generateHearts();
        generateSparkles();

        const handleResize = () => {
            generateHearts();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateHearts = () => {
        const numberOfHearts = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        const newHearts = [];

        for (let i = 0; i < numberOfHearts; i++) {
            newHearts.push({
                id: i,
                size: Math.random() * 20 + 10,
                x: Math.random() * 100,
                y: Math.random() * 100,
                animationDuration: Math.random() * 10 + 5,
                delay: Math.random() * 10,
            });
        }

        setHearts(newHearts);
    };

    const generateSparkles = () => {
        const numberOfSparkles = 30;
        const newSparkles = [];

        for (let i = 0; i < numberOfSparkles; i++) {
            newSparkles.push({
                id: i,
                size: Math.random() * 5 + 3,
                x: Math.random() * 100,
                y: Math.random() * 100,
                animationDuration: Math.random() * 3 + 2,
                delay: Math.random() * 5,
            });
        }

        setSparkles(newSparkles);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10] bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart animate-float"
                    style={{
                        width: heart.size,
                        height: heart.size,
                        left: heart.x + "%",
                        top: heart.y + "%",
                        animationDuration: `${heart.animationDuration}s`,
                        animationDelay: `${heart.delay}s`,
                    }}
                />
            ))}

            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="sparkle animate-sparkle"
                    style={{
                        width: sparkle.size,
                        height: sparkle.size,
                        left: sparkle.x + "%",
                        top: sparkle.y + "%",
                        animationDuration: `${sparkle.animationDuration}s`,
                        animationDelay: `${sparkle.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};
