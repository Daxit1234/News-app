import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Marquee from "react-fast-marquee";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
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
  capital=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title=`News Monkey ${this.capital(this.props.category)}`
  }
  async updatenews() {
    this.props.setprogress(10)
    const url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&category=${this.props.category}&language=en&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setprogress(30)
    let parseData = await data.json();
    this.props.setprogress(50)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setprogress(100)
  }
  async componentDidMount() {
    //   let url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&category=${this.props.category}&language=en&apiKey=bf88de657d0640ba95a6091aee70a77a&pagesize=${this.props.pagesize}`;
    //  this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   this.setState({
    //     articles: parseData.articles,
    //     totalResults: parseData.totalResults,
    //     loading:false
    //   });
    //   console.log("did mount");
    this.updatenews();
  }
  // handleNext = async () => {
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&language=en&category=${this.props.category}&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
  //   //   this.setState({loading:true})
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();
  //   //   this.setState({
  //   //      articles: parseData.articles,
  //   //     page: this.state.page + 1,
  //   //     loading:false
  //   //   });
  //   // }
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updatenews();
  // };
  // handleprevious = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&language=en&category=${this.props.category}&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   articles: parseData.articles,
  //   //   page: this.state.page - 1,
  //   //   loading:false
  //   // });
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updatenews();
  // };
   fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?counrty=${this.props.country}&category=${this.props.category}&language=en&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
   // this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
     // loading: false
    });
  };
  render() {
    return (
      <>
        <h1 className="bg-primary text-light mt-5">
          <Marquee speed={500}>Top  {this.capital(this.props.category)} Breaking News</Marquee>
        </h1>
        {
          this.state.loading &&
          <Spinner />
        }
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
            {/* <div className="d-flex justify-content-between">
              <button disabled={this.state.page <= 1} className=" btn btn-dark" onClick={this.handleprevious}>
                &larr; Previous
              </button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 16)} className="btn btn-dark" onClick={this.handleNext}>
                Next &rarr;
              </button>
            </div> */}
          </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;

//functional base component converted

// import { useEffect,useState } from "react";
// import Newsitem from "./Newsitem";
// import Marquee from "react-fast-marquee";
// import Spinner from "./Spinner";
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";
// const News=(props)=>{
//   const[articles,setarticles]=useState([])
//   const[loading,setloading]=useState(true)
//   const[page,setpage]=useState(1)
//   const[totalResults,settotalResults]=useState(0)

//   const capital=(string)=>{
//     return string.charAt(0).toUpperCase()+string.slice(1)
//   }
//   const updatenews=async()=>{
//     props.setprogress(10)
//     const url = `https://newsapi.org/v2/top-headlines?counrty=${props.country}&category=${props.category}&language=en&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
//     setloading(true)
//     let data = await fetch(url);
//     props.setprogress(30)
//     let parseData = await data.json();
//     props.setprogress(50)
//     setarticles(parseData.articles);
//     setloading(false);
//     settotalResults(parseData.totalResults)
//     props.setprogress(100)
//   }
//   useEffect(()=>{
//     document.title=`News Monkey ${this.capital(props.category)}`
//     updatenews();
//   },[props.category])
//   // handleNext = async () => {
//   //   // if (page + 1 > Math.ceil(totalResults / 12)) {
//   //   // } else {
//   //   //   let url = `https://newsapi.org/v2/top-headlines?counrty=${props.country}&language=en&category=${props.category}&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${page+1}&pagesize=${props.pagesize}`;
//   //   //   this.setState({loading:true})
//   //   //   let data = await fetch(url);
//   //   //   let parseData = await data.json();
//   //   //   this.setState({
//   //   //      articles: parseData.articles,
//   //   //     page: page + 1,
//   //   //     loading:false
//   //   //   });
//   //   // }
//   //   this.setState({
//   //     page: page + 1
//   //   })
//   //   this.updatenews();
//   // };
//   // handleprevious = async () => {
//   //   // let url = `https://newsapi.org/v2/top-headlines?counrty=${props.country}&language=en&category=${props.category}&apiKey=bf88de657d0640ba95a6091aee70a77a&page=${page-1}&pagesize=${props.pagesize}`;
//   //   // this.setState({loading:true})
//   //   // let data = await fetch(url);
//   //   // let parseData = await data.json();
//   //   // this.setState({
//   //   //   articles: parseData.articles,
//   //   //   page: page - 1,
//   //   //   loading:false
//   //   // });
//   //   this.setState({
//   //     page: page - 1
//   //   })
//   //   this.updatenews();
//   // };
//   const fetchMoreData = async () => {
//      const url = `https://newsapi.org/v2/top-headlines?counrty=${props.country}&category=${props.category}&language=en&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
//      setpage(page+1)
//    // this.setState({ loading: true })
//     let data = await fetch(url);
//     let parseData = await data.json();
//     setarticles(articles.concat(parseData.articles))
//     settotalResults(parseData.totalResults)
//   };
//     return (
//       <>
//         <h1 className="bg-primary text-ligh">
//           <Marquee speed={500}>Top  {capital(props.category)} Breaking News</Marquee>
//         </h1>
//         {
//           loading &&
//           <Spinner />
//         }
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner/>}
//         >
//         <div className="container">
//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-3 col-sm-12" key={element.url}>
//                   <Newsitem
//                     title={element.title}
//                     discription={element.description}
//                     imgurl={element.urlToImage}
//                     newsurl={element.url}
//                     date={element.publishedAt}
//                     author={element.author}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//             {/* <div className="d-flex justify-content-between">
//               <button disabled={page <= 1} className=" btn btn-dark" onClick={this.handleprevious}>
//                 &larr; Previous
//               </button>
//               <button disabled={page + 1 > Math.ceil(totalResults / 16)} className="btn btn-dark" onClick={this.handleNext}>
//                 Next &rarr;
//               </button>
//             </div> */}
//           </div>
//         </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// export default News;
// News.defaultProps = {
//   country: "in",
//   pagesize: 12,
//   category: "general"
// }
// News.propTypes = {
//   country: PropTypes.string,
//   pagesize: PropTypes.number,
//   category: PropTypes.string,
// }

