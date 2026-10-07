import { useState, useEffect, useRef } from 'react';

export default function Game() {
    // **hooks**
    // player position
    const [playerPosition, setPlayerPosition] = useState({
        x: 2,
        y: 3
    });

    const [enemyPosition, setEnemyPosition] = useState({
        x: 2,
        y: 1
    })
    // game state
    const isFirstRender = useRef(true);

    // dungeon map
    const gameMap = [
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
    ];

    // player movement
    useEffect(() => {
        function handleKeyDown(e) {
            setPlayerPosition((prev) => {
                let nextPosition = {
                    x: null,
                    y: null
                };

                switch (e.key) {
                    case "w":
                        nextPosition = { ...prev, y: prev.y - 1, };
                        break;
                    case "s":
                        nextPosition = { ...prev, y: prev.y + 1, };
                        break;
                    case "a":
                        nextPosition = { ...prev, x: prev.x - 1, };
                        break;
                    case "d":
                        nextPosition = { ...prev, x: prev.x + 1, };
                        break;
                    default:
                        return prev;
                };

                if (
                    nextPosition.y >= gameMap.length ||
                    nextPosition.y < 0 ||
                    nextPosition.x >= gameMap[0].length ||
                    nextPosition.x < 0 ||
                    gameMap[nextPosition.y][nextPosition.x] === "wall"
                ) {
                    return prev;
                } return nextPosition;

            });
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        console.log(`the player is in: ${playerPosition.x}, ${playerPosition.y}`);
        console.log(`the goblin is in: ${enemyPosition.x}, ${enemyPosition.y}`);
    }, [playerPosition]);

    useEffect(() => {
        setEnemyPosition({
            x: 3,
            y: 1
        });
    }, [playerPosition])

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
                                {enemyPosition.x === x && enemyPosition.y === y && "G"}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}