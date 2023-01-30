import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Marquee from "react-fast-marquee";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articals: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page}&pagesize=16`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articals: parseData.articles,
      totalResults: parseData.totalResults,
    });
    //console.log(parseData.articles);
  }
  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 16)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page}&pagesize=16`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articals: parseData.articles,
        page: this.state.page + 1,
      });
    }
  };
  handleprevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page}&pagesize=16`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articals: parseData.articles,
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        <h1>
          <Marquee speed={500}>Top Leatest Breaking News</Marquee>
        </h1>
        <div className="container my-3">
          <div className="row">
            {this.state.articals.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    title={element.title}
                    discription={element.description}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    date={element.publishedAt.slice(0, 10)}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <button className=" btn btn-dark" onClick={this.handleprevious}>
                &larr; Previous
              </button>
              <button className="btn btn-dark" onClick={this.handleNext}>
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
