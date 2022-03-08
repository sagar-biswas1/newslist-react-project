
import { useEffect } from 'react';
import './App.css';
import axios from 'axios'
// import FunctionalClock from './components/FunctionalCounter';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import NewsList from './components/NewsList/NewsList';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import News, {newsCategories} from './newsCategory/index'






function App() {

  const [news, setNews]= useState([]);
  const [category, setCategory] = useState(newsCategories.technology);

   useEffect(() => {
   const news=new News(category)
   news.getNews().then(data=>setNews(data.articles))
    // axios
    //   .get(
    //     // `https://newsapi.org/v2/top-headlines?apiKey=6ef33175ea344ae9a50694cda7551c4c&category=${category}&pageSize=2`
    //   )
    //   .then((data) => setNews(data.data.articles));
  }, [category]);
  

  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} />
      <div className="my-3">
        about {0} results found. Page {1} of {100}
      </div>
      <NewsList news={news} />
    { news.length===0 && <Loading /> }
      <Pagination />
      {/* <FunctionalClock/> */}
    </div>
  );
}

export default App;
