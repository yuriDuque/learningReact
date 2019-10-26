import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker'

import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard.js";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content={faker.lorem.lines(1)} avatar={faker.image.avatar()} />
      <CommentDetail author="Alex" timeAgo="Today at 2:45PM" content={faker.lorem.lines(1)} avatar={faker.image.avatar()} />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:45PM" content={faker.lorem.lines(1)} avatar={faker.image.avatar()} />
    </div >
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
