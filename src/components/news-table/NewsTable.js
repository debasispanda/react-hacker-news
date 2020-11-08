import PropTypes from 'prop-types';

import './NewsTable.css';
import NewsTableRow from './NewsTableRow';

const NewsTable = ({ news, onHideNews, onUpvoteNews }) => {
  return (
    <div className="NewsTable">
      <table>
        <thead>
          <tr>
            <th>Comments</th>
            <th>Vote Count</th>
            <th>Upvote</th>
            <th>News Details</th>
          </tr>
        </thead>
        <tbody>
          <NewsTableRow news={news} onHideNews={onHideNews} onUpvoteNews={onUpvoteNews}></NewsTableRow>
        </tbody>
      </table>
    </div>
  );
}

NewsTable.propTypes = {
  news: PropTypes.array,
  onHideNews: PropTypes.func,
  onUpvoteNews: PropTypes.func
};

export default NewsTable;
