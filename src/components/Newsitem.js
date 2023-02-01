import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    const { title, discription, imgurl, newsurl, source, date, author } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imgurl
                ? imgurl
                : "https://c.ndtvimg.com/2018-10/dl56ce8_google-generic-reuters_625x300_08_October_18.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
              </span>
            </h5>
            <p className="card-text">
              {discription
                ? discription
                : "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"}
            </p>
            <p className="card-text">
              By {author ? author : "unknow author"} <br /> on{" "}
              {new Date(date).toGMTString()}.
            </p>
          </div>
        </div>
            <a href={newsurl} className="btn btn-sm btn-dark">
              Read More
            </a>
      </div>
    );
  }
}

export default Newsitem;
