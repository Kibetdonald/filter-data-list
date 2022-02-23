import { useState } from 'react';
import items from './allData';
import Menu from './Components/EventsMenu';
import Button from './Components/EventsButton';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="App">
            <Button className="btn btn-filters" button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

    </div>
  );
}

export default App;
