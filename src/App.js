// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Analyze from './pages/Analyze';
// import AddNewItem from './pages/AddNewItem';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/analyze" element={<Analyze />} />
//         <Route path="/add-new" element={<AddNewItem />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import ItemList from './pages/ItemList';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/add-new" element={<ItemList />} />
    </Routes>
  );
}

export default App;
