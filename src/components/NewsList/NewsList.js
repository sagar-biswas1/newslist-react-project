import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({news}) => {


    return (
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 container mx-auto">
        {news && news.length === 0 && (
          <h1 className="text-center text-warning fw-bold p-3">
            NO NEWS FOUND
          </h1>
        )}

        {news.map((singleNews) => (
          <NewsItem key={singleNews.title} details={singleNews} />
        ))}
      </div>
    );
};

export default NewsList;