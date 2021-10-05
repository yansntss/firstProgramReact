import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  const [name, setName] = useState("yan");
  const [age, setAge] = useState(22);
  const [bg, setBg] = useState("#FFF000");

  const [list, setList] = useState([
    "eu comi mamao",
    "o mamao tava ruim",
    "nunca mais como melao",
    "prefiro mamao"
  ]);

  const handle1 = () => {
    setName("marcos");
    setAge(33);
    setBg("#FF0554");
  };
  const handle2 = () => {
    setName("yan");
    setAge(22);
    setBg("#EEEFF1");
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <Header name={name} age={age} />
      {age === 22 && <button onClick={handle1}> clique aqui 22 </button>}
      {age === 33 && <button onClick={handle2}> clique aqui 33</button>}


    <ul>
      {list.map((frase, index)=>(
        <li key={index}>{frase}</li>
      ))}
    </ul>

      <Footer />
    </div>
  );
};
export default App;
