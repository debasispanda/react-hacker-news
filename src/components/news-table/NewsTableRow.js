import PropTypes from 'prop-types';
import NewsDetails from '../news-details/NewsDetails';

const NewsTableRow = ({ news, onHideNews, onUpvoteNews }) => {
  return (
    news.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.num_comments || '-'}</td>
          <td>{item.points || '-'}</td>
          <td>
            <button className="icon-button" aria-label="upvote" title="upvote" onClick={(e) => onUpvoteNews(item, e)}>
              <i className="material-icons">arrow_drop_up</i>
            </button>
          </td>
          <td>
            <NewsDetails news={item} onHideNews={onHideNews} onUpvoteNews={onUpvoteNews}></NewsDetails>
          </td>
        </tr>
      )
    })
  )
}

NewsTableRow.propTypes = {
  news: PropTypes.array,
  onHideNews: PropTypes.func,
  onUpvoteNews: PropTypes.func
};

export default NewsTableRow
