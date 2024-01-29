import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <div className='form'>
        <h1>Pizza Order</h1>
        <label>
          <input type="text" name='name' onChange={handleNameChange}/>
        </label>
        <label>
          <input type="checkbox" checked={pepperoni} onChange={() => setPepperoni(!pepperoni)}/>
          Pepperoni
        </label>
        <label>
          <input type="checkbox" checked={sausage} onChange={() => setSausage(!sausage)}/>
          Sausage
        </label>
        <label>
          <input type="checkbox" checked={peppers} onChange={() => setPeppers(!peppers)}/>
          Peppers
        </label>
        <label>
          <input type="checkbox" checked={onions} onChange={() => setOnions(!onions)}/>
          Onions
        </label>
      </div>
      <div className='order-summary'>
        <div>{name}</div>
        {pepperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
