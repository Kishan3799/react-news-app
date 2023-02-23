import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" /*style={{ width: "390px", cursor:"pointer",  }}*/>
        <div
          style={{
            display: "flex",
            jsutifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-success"
            style={{ left: "7%", zIndex: "1" }}
          >
            {" "}
            {source}{" "}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://people.socsci.tau.ac.il/mu/snsnews/files/2016/11/blog6.jpg"
              : imageUrl
          }
          className="card-img-top"
          /*style={{ width: "390px", height: "230px", objectFit: "cover" }}*/
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{title.slice(0, 52)}...</h6>
          <p className="card-text">{description.slice(0, 80)}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknowon" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-outline-success">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
