import React, { useEffect, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackComponent from './components/Fallback';



const Home = React.lazy(() => import('./screens/Home'))
const About = React.lazy(() => import('./screens/About'))
const Card = React.lazy(() => import('./screens/Cards'))
const Contact = React.lazy(() => import('./screens/Contact'))
const Faq = React.lazy(() => import('./screens/Faq'))
const Current = React.lazy(() => import('./screens/Current'))
const Savings = React.lazy(() => import('./screens/Savings'))
const Login = React.lazy(() => import('./screens/Login'))



function App() {
  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          {/* General*/}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cards' element={<Card />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/current' element={<Current />} />
          <Route path='/savings' element={<Savings />} />
        
          {/*auth screens*/}
          <Route path='/login' element={<Login />} />
        </Routes>

      </Suspense>
    </div>
  );
}

export default App;

