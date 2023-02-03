import "./Newsitem.css"
const Newsitem=(props)=>{
    const { title, discription, imgurl, newsurl, source, date, author } =props;
    const des={
      height:'6rem',
    }
    const head={
      height:"3rem"
    }
    return (
      <div className="my-3" style={{'&::-webkit-scrollbar': {
        display:'none'
    }}}>
        <div className="card">
          <div style={{diplay:"flex",justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className="badge rounded-pill bg-danger">
                {source}
              </span>
          </div>
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
            <h5 className="card-title overflow-auto" style={head}>{title}</h5>
            <p className="card-text overflow-auto" style={des}>
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

export default Newsitem;
