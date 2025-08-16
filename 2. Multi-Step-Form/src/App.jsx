// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Step1 from "./components/Step1";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Step1 />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import Step1 from './components/Step1'

const App = () => {
  return (
    <div>
      <Step1/>
    </div>
  )
}

export default App