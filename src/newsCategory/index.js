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
  constructor(category, searchTerm, pageSize, currentPage) {
    this._category = category;
    this._searchTerm = searchTerm;
    this._pageSize = MAX_ITEM_PER_PAGE;
    this._currentPage = currentPage;
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
      };
    } catch (e) {
      throw new Error(e);
    }
  };

  next() {}

  previous() {}

  setCurrentPage() {}

  changeCategory() {}

  search() {}

  _getUrl() {
    let url = `top-headlines?apiKey=`;
    if (this._category) url += `&category=${this._category}`;

    if (this._searchTerm) url += `&q=${this._searchTerm}`;

    if (this._pageSize) url += `&pageSize=${this._pageSize}`;

    if (this._currentPage) url += `&page=${this._currentPage}`;

    return url;
  }
}
