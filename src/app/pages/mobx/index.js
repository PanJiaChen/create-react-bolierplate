import React from "react";
import {observer} from "mobx-react";
import Posts from "../../models/Mobx";
import './index.scss';

@observer
class IndexContainer extends React.Component {
  constructor() {
    super();
    this.posts = new Posts();
    this.posts.fetchPosts()
  }

  render() {
    return (
      <ul>
        {this.posts.list.map((post)=>(
          <li className="apple" key={post.id}>{post.title}a</li>
        ))}
      </ul>
    )
  }

}

export default IndexContainer;
