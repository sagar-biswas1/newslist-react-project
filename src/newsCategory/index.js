import axios from "../utils/axios";
// require("dotenv").config();

export const newsCategories = {
  technology: "technology",
  science: "science",
  business: "business",
  entertainment: "entertainment",
  sports: "sports",
  health: "health",
};

const MAX_ITEM_PER_PAGE = 10;

export default class News {
  constructor(category, searchTerm) {
    this._category = category;
    this._searchTerm = searchTerm;
    this._pageSize = MAX_ITEM_PER_PAGE;
    this._currentPage = 1;
    this._totalPage = 1;
  }

  getNews = async () => {
    console.log(process.env.REACT_APP_SECRET_NAME); // remove this after you've confirmed it working
    console.log(this._getUrl());
    try {
      const { data } = await axios.get(this._getUrl());
      this._totalPage = Math.ceil(data.totalResults / this._pageSize);
      return {
        articles: data.articles,
        totalPage: this._totalPage,
        category: this._category,
        currentPage: this._currentPage,
        totalResult: data.totalResults,
        isNext:this._isNext(),
        isPrevious: this._isPrevious(),
      };
    } catch (e) {
      throw new Error(e);
    }
  };

  next() {
    console.log('sorry')
    if (this._isNext()) {
      console.log('hello')
      this._currentPage++;
      return this.getNews();
    }

    return false;
  }

  previous() {
    console.log("sorry");
    if (this._isPrevious()) {
       console.log("hello");
      this._currentPage--;
      return this.getNews();
    }
    return false;
  }



  setCurrentPage(pageNumber) {
    if (pageNumber < 1 && pageNumber > this._totalPage) {
      throw new Error("Invalid page namuber");
    } else {
      this._currentPage = pageNumber;

      return this.getNews();
    }
  }

  changeCategory(newsCategory) {
    this._category = newsCategory;
    this._currentPage = 1;
    return this.getNews();
  }

  search(searchTerm) {
    this._searchTerm = searchTerm;

    return this.getNews();
  }

  _getUrl() {
    let url = `top-headlines?apiKey=${apiKey}`;
    if (this._category) url += `&category=${this._category}`;

    if (this._searchTerm) url += `&q=${this._searchTerm}`;

    if (this._pageSize) url += `&pageSize=${this._pageSize}`;

    if (this._currentPage) url += `&page=${this._currentPage}`;

    return url;
  }

  _isNext() {
    return this._currentPage < this._totalPage;
  }
  _isPrevious() {
    return this._currentPage > 1;
  }
}
