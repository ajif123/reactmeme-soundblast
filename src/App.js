import logo from "./img/logo.png"
import data from './data';
import { useState } from "react";
import Character from "./Components/Character";


function App() {
  const [characters] = useState(data);
  const [activeChar, setActiveChar] = useState(characters[0]);


  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="Meme Logo"/>
      </div>
      <ul className="charaters-con">
        {
          characters.map((char) => {
              const {id, image} = char
              return <li key={id} className = {`${activeChar.id === id ? 'active' : ''}`} onClick={ () => setActiveChar(char) }>
                <div className="characters">
                  <img src={image} alt=""/>
                </div>
              </li>

          })
        }
      </ul>
      <Character {...activeChar} />
    </div>
  );
}

export default App;
