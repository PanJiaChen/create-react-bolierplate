import "whatwg-fetch";
import {observable} from "mobx";

export default class Posts {
  @observable list = [];

  fetchPosts() {
    fetch("https://api.wallstreetcn.com/hatano/v1/discussions?order=-createdAt&page=1", {
      method: "Get",
    }).then(response=> {
      return response.json()
    }).then(data => {
      this.list = data.results;
    }).catch(err => {
      console.error(err.stack);
    })
  }

}



