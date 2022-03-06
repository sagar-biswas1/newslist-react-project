
import './App.css';

// import FunctionalClock from './components/FunctionalCounter';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
// import { useState } from 'react';
import {newsCategories} from './newsCategory/index'
function App() {

// const [defaultCategory, setDefaultCategory] = useState(newsCategories);
const fakeNews = [{ title: "hello" }, { title: "world" }];
  return (
    <div className="App">
      <Header category={newsCategories.technology} />
    <NewsList news={fakeNews}/>
      {/* <FunctionalClock/> */}
    </div>
  );
}

export default App;
