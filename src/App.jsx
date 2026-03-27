// import { useState } from 'react';

// export default function App() {
//   const [player, setPlayer] = useState({ x: 5, y: 5 });

//   return (
//     <div>
//       <h1>bruhogue</h1>
//       <p>
//         Player Position: ({player.x}, {player.y})
//       </p>
//     </div>
//   );
// }

import Game from "./components/Game";

export default function App() {
  return (
    <Game />
  );
};