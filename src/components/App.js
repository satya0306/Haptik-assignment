import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./Products/Products";
import PostComment from "./PostComment/PostComment";
import "../styles/App.css";

function App() {
  return (
    <div className="container App">
      Today
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/PostComment" component={PostComment} />
      </Switch>
    </div>
  );
}

export default App;
