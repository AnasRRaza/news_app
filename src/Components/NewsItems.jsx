import React from 'react';

const NewsItems = (props) => {

  const { title, description, imgUrl, newsUrl, author, date } = props

  return (
    <div className="my-3">
      <div className="card">
        <img src={imgUrl ? imgUrl : "https://www.sampabjj.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank_" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItems;
