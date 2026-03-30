import { useState, useEffect } from 'react';

export default function Game() {
    // **hooks**
    // player position
    const [playerPosition, setPlayerPosition] = useState({
        x: 5,
        y: 5,
    });

    // dungeon map
    const [gameMap, setGameMap] = useState(
        [
            [
                {},
                {},
                {},
                {},
                {},
            ],
            [
                {},
                {},
                {},
                {},
                {},
            ],
            [
                {},
                {},
                {},
                {},
                {},
            ],
            [
                {},
                {},
                {},
                {},
                {},
            ],
            [
                {},
                {},
                {},
                {},
                {},
            ],
        ]
    );

    // player movement
    useEffect(() => {
        function handleKeyDown(e) {
            setPlayerPosition((prev) => {
                switch (e.key) {
                    case "w":
                        return { ...prev, y: prev.y + 1, };
                    case "s":
                        return { ...prev, y: prev.y - 1, };
                    case "a":
                        return { ...prev, x: prev.x - 1, };
                    case "d":
                        return { ...prev, x: prev.x + 1, };
                    default:
                        return prev;
                };
            });
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <div>
                <h1>Bruhogue</h1>
            </div>
            <div>
                <p>Player Position: {playerPosition.x}, {playerPosition.y}</p>
            </div>
        </>
    );
};