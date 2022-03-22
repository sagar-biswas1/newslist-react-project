import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";

import axios from 'axios';
const NewsDetails = () => {

// const [moreNews,setMoreNews]= useState([])

    let {title} = useParams();
const { data, isLoading } = useQuery("data", () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?sources=${title}&apiKey=6ef33175ea344ae9a50694cda7551c4c`
  );
});

// console.log('from query',p)
// useEffect(() => {

//   // let q= title? title.split(' ').splice(0,2).join(' '):''
// const url = `https://newsapi.org/v2/top-headlines?sources=${title}&apiKey=6ef33175ea344ae9a50694cda7551c4c`;
// console.log('title',url)
//   fetch(url)
//   .then(res=>res.json()).then(data=>(setMoreNews(data.articles)))

  
// }, [title])

// console.log(moreNews)
    
    if(isLoading) return " Loading"


    return (
      <div className="container mt-4">
        {data.data.articles.map((news) => (
          <Card details={news} key={news.title} />
        ))}
        {/* <Card></Card> */}
      </div>
    );
};


const Card= ({details}) => {
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
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={urlToImage} class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> {title}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">{content}</p>
          <p class="card-text">
            <small class="text-muted">{publishedAt}</small>
            <small class="text-muted">{author}</small>
          </p>
        </div>
        <p>Source :{source.name || " Not found" }</p>
      </div>
    </div>
  </div>
);
}

export default NewsDetails;