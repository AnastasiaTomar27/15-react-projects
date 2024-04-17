// import React, { useState } from 'react';
// import data from './data';
// import List from './List';
// function App() {
//   const [people, setPeople] = useState(data);
//   return <main>
//     <section className='container'>
//       {people.length === 1 && <h3>{people.length} syntymäpäivä tänään</h3>}
//       {((people.length > 1) || (people.length === 0)) && <h3>{people.length} syntymäpäivää tänään</h3>}
//       <List people={people}/>
//       <button onClick={() => setPeople([])}>
//         poista kaikki
//       </button>
//     </section>
//   </main>;
// }

// export default App;


import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return <main>
    <section className='container'>
      {people.length === 1 && <h3>{people.length} syntymäpäivä tänään</h3>}
      {((people.length > 1) || (people.length === 0)) && <h3>{people.length} syntymäpäivää tänään</h3>}
      <List people={people}/>
      <button onClick={() => setPeople([])}>
        poista kaikki
      </button>
    </section>
  </main>;
}

export default App;
