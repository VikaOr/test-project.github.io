
import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Users from './Pages/Users.jsx';
import MainPage from './Pages/MainPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home /> } />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}




export default App;
