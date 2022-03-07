import React from 'react';

const NewsItem = ({details}) => {
    const { title, description, publishedAt, content, author, urlToImage } =
      details;
    return (
      <div className="col">
        <div className="card h-100">
          <img src={urlToImage} className="card-img-top img-fluid w-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{author}</h5>
            <p>{content}</p>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{publishedAt}</small>
          </div>
        </div>
      </div>
    );
};

export default NewsItem;