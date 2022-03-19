import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({news}) => {

  console.log('news',news)

    return (
      <div className="">
        {news && news.length === 0 && (
          <h1 className="text-center text-warning fw-bold p-3">
            NO NEWS FOUND
          </h1>
        )}
        <div
          class="container-fluid bg-trasparent my-4 p-3"
          style={{ position: "relative" }}
        >
          {" "}
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 mx-auto">
            {news?.map((singleNews) => (<NewsItem key={singleNews.title} details={singleNews} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default NewsList;