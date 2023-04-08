import data from './data'
import './App.css';
import { useState } from 'react';

function App() {
  const [holidays, setHolidays] = useState(data)
  return (
    <main>
      <section className='container'>
    <h3>National Holidays Dates</h3>
    {holidays.map((holiday)=>{
      return(
        <div className='holiday' key={holiday.id}>
          <img src={holiday.img} alt="" />
          <div>
            <p>{holiday.title}</p>
            <p>{holiday.date}</p>
          </div>
        </div>
      )
    })}
    <button onClick={()=>setHolidays([])}>Clear All</button>
      </section>
      
    </main>
  );
}

export default App;
