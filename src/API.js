import axios from "axios";
const AUTHKEY = "406fe41210b1425d8bf26fe64336f792";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// + AUTHKEY + "&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + AUTHKEY + "&q=");
    // + query + APIKEY
  }
};