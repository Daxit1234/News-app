import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    const {title,discription,imgurl,newsurl,date}=this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
          <img src={imgurl?imgurl:"https://c.ndtvimg.com/2018-10/dl56ce8_google-generic-reuters_625x300_08_October_18.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}.</p>
            <p className="card-text">{date}.</p>
            <a href={newsurl} className="btn btn-sm btn-dark">Read MOre</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
