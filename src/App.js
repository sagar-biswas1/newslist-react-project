
import { useEffect } from 'react';
import './App.css';

// import FunctionalClock from './components/FunctionalCounter';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import NewsList from './components/NewsList/NewsList';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import News, {newsCategories} from './newsCategory/index'


const news = new News(newsCategories.technology);



function App() {

  const [allNews, setNews]= useState({});
  const [category, setCategory] = useState();

  const [allNewsData,setAllNewsData]= useState({
newsData:{},
isLoading:true

  })

   useEffect(() => {
   
   news.getNews().then((data) => setAllNewsData({newsData:data,isLoading:false}));
   
  }, []);
  

  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} />
      <div className="my-3">
        about {0} results found. Page {1} of {100}
      </div>
      {allNewsData.isLoading ? (
        <Loading />
      ) : (
        <NewsList news={allNewsData?.newsData?.articles} />
      )}

      <Pagination />
      {/* <FunctionalClock/> */}
    </div>
  );
}

export default App;
