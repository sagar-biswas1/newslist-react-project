import { useEffect } from "react";
import "../App.css";

// import FunctionalClock from './components/FunctionalCounter';
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";
import News, { newsCategories } from "../newsCategory/index";

const news = new News(newsCategories.technology);
let timeOutId;
let searchInputTimeOutID;
function Home() {
  const [category, setCategory] = useState();

  const [allNewsData, setAllNewsData] = useState({
    newsData: {},
    isLoading: true,
  });

  useEffect(() => {
    news
      .getNews()
      .then((data) => setAllNewsData({ newsData: data, isLoading: false }));
  }, []);

  const next = () => {
    if (allNewsData.newsData.isNext) {
      console.log("you can go to next page");

      setAllNewsData({ newsData: {}, isLoading: true });
    }

    news
      .next()
      .then((data) => setAllNewsData({ newsData: data, isLoading: false }));
  };

  const previous = () => {
    if (allNewsData.newsData.isPrevious) {
      setAllNewsData({ newsData: {}, isLoading: true });
      news
        .previous()
        .then((data) => setAllNewsData({ newsData: data, isLoading: false }))
        .catch((e) => alert("sorry you can not go to previous apgae"));
    } else {
      return;
    }

    return false;
  };

  const handlePageNumberInput = (delay = 2000) => {
    return (number) => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(() => {
        setAllNewsData({ newsData: {}, isLoading: true });
        news.setCurrentPage(parseInt(number)).then((data) => {
          setAllNewsData({ newsData: data, isLoading: false });
        });
      }, delay);
    };
  };

  const handleInputChange = () => {
    return (value, delay) => {
      if (searchInputTimeOutID) {
        clearTimeout(searchInputTimeOutID);
      }
      searchInputTimeOutID = setTimeout(() => {
        setAllNewsData({ newsData: {}, isLoading: true });
        news.search(value).then((data) => {
          setAllNewsData({ newsData: data, isLoading: false });
        });
      }, delay);
    };
  };

  const handleCategory = (value) => {
    setCategory(value);
    setAllNewsData({ newsData: {}, isLoading: true });
    news.changeCategory(value).then((data) => {
      setAllNewsData({ newsData: data, isLoading: false });
    });
  };
  return (
    <div className="App">
      <Header
        category={category}
        handleCategory={handleCategory}
        handleInputChange={handleInputChange}
      />
      <div className="my-3 text-center">
        {!allNewsData.isLoading && (
          <span>
            {" "}
            about {allNewsData?.newsData?.totalResult} results found. Page{" "}
            {allNewsData?.newsData?.currentPage} of{" "}
            {allNewsData?.newsData?.totalPage}
          </span>
        )}
      </div>
      {allNewsData.isLoading ? (
        <Loading />
      ) : (
        <NewsList news={allNewsData?.newsData?.articles} />
      )}

      <Pagination
        next={next}
        previous={previous}
        isNext={allNewsData?.newsData?.isNext}
        isPrevious={allNewsData?.newsData?.isPrevious}
        currentPage={allNewsData?.newsData?.currentPage || 0}
        totalPage={allNewsData?.newsData?.totalPage || 0}
        handlePageNumberInput={handlePageNumberInput}
      />
      {/* <FunctionalClock/> */}
    </div>
  );
}

export default Home;
