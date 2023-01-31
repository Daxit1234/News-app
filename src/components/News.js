import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Marquee from "react-fast-marquee";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 12,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articals: [],
      loading: false,
      page: 1,
    };
  }
  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&category=${this.props.category}&language=en&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articals: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
    console.log(url);
  }
  async componentDidMount() {
    //   let url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&category=${this.props.category}&language=en&apiKey=bf88de657d0640ba95a6091aee70a77a&pagesize=${this.props.pagesize}`;
    //  this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   this.setState({
    //     articals: parseData.articles,
    //     totalResults: parseData.totalResults,
    //     loading:false
    //   });
    //   console.log("did mount");
    this.updatenews();
  }
  handleNext = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&language=en&category=${this.props.category}&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   this.setState({
    //      articals: parseData.articles,
    //     page: this.state.page + 1,
    //     loading:false
    //   });
    // }
    this.setState({
      page: this.state.page + 1
    })
    this.updatenews();
  };
  handleprevious = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&language=en&category=${this.props.category}&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articals: parseData.articles,
    //   page: this.state.page - 1,
    //   loading:false
    // });
    this.setState({
      page: this.state.page - 1
    })
    this.updatenews();
  };

  render() {
    return (
      <>
        <h1 className="bg-success">
          <Marquee speed={500}>Top Leatest Breaking News</Marquee>
        </h1>
        {
          this.state.loading &&
          <Spinner />
        }
        <div className="container">
          <div className="row">
            {!this.state.loading && this.state.articals.map((element) => {
              return (
                <div className="col-md-3 col-sm-12" key={element.url}>
                  <Newsitem
                    title={element.title}
                    discription={element.description}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <button disabled={this.state.page <= 1} className=" btn btn-dark" onClick={this.handleprevious}>
                &larr; Previous
              </button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 16)} className="btn btn-dark" onClick={this.handleNext}>
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
