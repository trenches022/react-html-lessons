import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Lesson from '../pages/Lesson';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/lesson/:id' element={<Lesson />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes