import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({details}) => {

  
    const {
      title,
      description,
      publishedAt,
      content,
      author,
      urlToImage,
      source,
    } = details;
    return (
      <div class="col">
        <div class="card h-100 shadow-sm">
          {" "}
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://img-16.ccm2.net/V8QwPUdNsbM_wD1nrDpMVhRSX0c=/440x/032c74b3b15c48e19315705230c0b652/ccm-encyclopedia/Screen_Shot_2020-10-20_at_11.08.13.png"
            }
            className="card-img-top img-fluid w-100"
            alt="..."
          />
          <div class="card-body">
            <div class="clearfix mb-3">
              {" "}
              <span class="float-start badge rounded-pill bg-primary">
                {title?.slice(0, 20)}...
              </span>{" "}
              <span class="float-end price-hp">{author}</span>{" "}
            </div>
            <p class="card-title">
              {content ? content?.slice(0, 150) : "No content found "} <br />
              <br />
              <br />
              <br />
            </p>
            <div class="text-center my-4">
              {" "}
              {
              source.id &&  <Link
                  to={`news/${source.id}`}
                  className="ms-4 btn btn-info btn-small"
                >
                  {" "}
                  More from {source.id}
                </Link>
              }
            </div>
          </div>
        </div>
      </div>

      // <div className="col">
      //   <div className="card h-100">
      //     <img src={urlToImage} className="card-img-top img-fluid w-100" alt="..." />
      //     <div className="card-body">
      //       <h5 className="card-title">{title}</h5>
      //       <h5 className="card-title">{author}</h5>
      //       <p>{content}</p>
      //       <p className="card-text">{description}</p>
      //     </div>
      //     <div className="card-footer">
      //       <small className="text-muted">{publishedAt}   <span> <Link to={`news/${title}`} className='ms-4 btn btn-info btn-small'> See details</Link></span></small>
      //     </div>
      //   </div>
      // </div>
    );
};

export default NewsItem;