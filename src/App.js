import React from 'react';
import Dinner from './dinner';

function App(){
  return(
    <div className="App">

    <Dinner dishName="Biryani" sweetDish="Kheer"></Dinner>

<hr/>

<Dinner dishName="Nihari" sweetDish="Laby shree"></Dinner>

<hr/>
<Dinner dishName="Kharai" sweetDish="Mithai"></Dinner>

</div>
  );
}

export default App;
