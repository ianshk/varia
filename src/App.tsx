import { useState } from 'react';
import { Button } from './components/Button';

function App() {
  const [clicked, setClicked] = useState(true);

  function handleClick() {
    setClicked(!clicked);
    console.log('clicked ' + clicked);
  }

  return (
    <div className="container mx-auto px-4">
      <p className="text-slate-700">Primary button</p>
      <Button intent="primary" size="small" onPress={handleClick}>
        Click
      </Button>
      <p className="text-slate-700">Secondary button</p>
      <Button intent="secondary" size="medium" onPress={handleClick}>
        Click
      </Button>
      <p className="text-slate-700">Destructive button</p>
      <Button intent="destructive" size="large" onPress={handleClick}>
        Click
      </Button>
    </div>
  );
}

export default App;
