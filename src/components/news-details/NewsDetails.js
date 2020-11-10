import PropTypes from "prop-types";
import getHostName from "../../common/getHostName";
import timeSince from "../../common/timeSince";
import "./NewsDetails.css";

const NewsDetails = ({ news, onHideNews }) => {
  return (
    <>
      <span className="news-title">{news.title}</span>
      {news.url && (
        <a
          className="news-url"
          href={news.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          ({getHostName(news.url)}){" "}
        </a>
      )}
      {news.author && <span className="news-by"> by </span>}
      {news.author}
      <span className="news-created"> {timeSince(news.created_at)} </span>
      <span className="news-hide" onClick={(e) => onHideNews(news.objectID, e)}>
        <span>[</span> hide <span>]</span>
      </span>
    </>
  );
};

NewsDetails.propTypes = {
  news: PropTypes.object,
  onHideNews: PropTypes.func,
};

export default NewsDetails;
