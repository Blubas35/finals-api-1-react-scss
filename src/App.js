import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Books from './Pages/BooksPage/Books';
import Reviews from './Pages/ReviewsPage/Reviews';
import MainNavigation from './Pages/MainNavigation/MainNavigation';
import Book from './Pages/Book/Book';


function App() {
  return (

    <div className="App">
      <MainNavigation></MainNavigation>
      <Routes>
        <Route path='/books' element={<Books></Books>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/' element={
          <div>
            <Link to='/books'>Books</Link>
            <Link to='/reviews'>Reviews</Link>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
