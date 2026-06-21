import { useState, useEffect } from 'react';

export default function Game() {
    // **hooks**
    // player position
    const [playerPosition, setPlayerPosition] = useState({
        x: 2,
        y: 2,
    });

    // dungeon map
    const [gameMap, setGameMap] = useState(
        [
            [
                "wall",
                "wall",
                "wall",
                "wall",
                "wall",
            ],
            [
                "wall",
                "floor",
                "floor",
                "floor",
                "wall",
            ],
            [
                "wall",
                "floor",
                "floor",
                "floor",
                "wall",
            ],
            [
                "wall",
                "floor",
                "floor",
                "floor",
                "wall",
            ],
            [
                "wall",
                "wall",
                "wall",
                "wall",
                "wall",
            ],
        ]
    );

    // player movement
    useEffect(() => {
        function handleKeyDown(e) {
            setPlayerPosition((prev) => {
                switch (e.key) {
                    case "w":
                        return { ...prev, y: prev.y - 1, };
                    case "s":
                        return { ...prev, y: prev.y + 1, };
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
            <div>
                {gameMap.map((row, y) => (
                    <div key={y} style={{ display: "flex" }}>
                        {row.map((tile, x) => (
                            <div
                                key={x}
                                style={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: tile === "wall" ? "black" : "lightgray",
                                    border: "1px solid #333",
                                    color: "#F00"
                                }}
                            >
                                {playerPosition.x === x && playerPosition.y === y && "@"}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};