import React, { Component } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

class ProductList extends Component {
  render() {
    console.log(this.props.node);
    return (
      <div>
        <ul className="SingleProduct">
          {this.props.node.map(data => {
            return (
              <li key={data.node.id}>
                <div className="Item">
                  <Link
                    to={{
                      pathname: "/PostComment/" + data.node.id,
                      state: { data: data }
                    }}
                  >
                    <a href=" " className="Link" alt="product">
                      <div className="Thumbnail">
                        <img
                          src={data.node.media[0].url}
                          className="ImageWrap"
                          alt="product "
                        />
                      </div>
                      <div className="Content">
                        <h3 className="Title">{data.node.name}</h3>
                        <p className="Tagline">{data.node.description}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
