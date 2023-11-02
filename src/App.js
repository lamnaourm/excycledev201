import { useState } from 'react';
import './App.css';
import Exemple from './components/Exemple';

function App() {

  const [visible, setVisible] = useState(true)
  return (
    <div className="App">
     {visible && <Exemple />}
<br/>
     <button onClick={() => setVisible(!visible)}>Afficher</button>
    </div>
  );
}

export default App;
