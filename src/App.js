
import './App.css';

// import FunctionalClock from './components/FunctionalCounter';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import Pagination from './components/Pagination/Pagination';
// import { useState } from 'react';
import {newsCategories} from './newsCategory/index'
function App() {

// const [defaultCategory, setDefaultCategory] = useState(newsCategories);
const fakeNews = [{ title: "hello" }, { title: "world" }];
  return (
    <div className="App">
      <Header category={newsCategories.technology} />
      <div className='my-3'>
        about {0} results found. Page {1} of {100}
      </div>
    <NewsList news={fakeNews}/>
    <Pagination/>
      {/* <FunctionalClock/> */}
    </div>
  );
}

export default App;
