import axios from "../utils/axios";

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

  async getNews() {}

  next() {}

  previous() {}

  setCurrentPage() {}

  changeCategory() {}

  search() {}

  _getUrl() {
    let url = ``;
    if (this._category) url += `&category=${this._category}`;

    if (this._searchTerm) url += `&q=${this._searchTerm}`;

    if (this._pageSize) url += `&pageSize=${this._pageSize}`;

    if (this._currentPage) url += `&page=${this._currentPage}`;

    return url;
  }
}
