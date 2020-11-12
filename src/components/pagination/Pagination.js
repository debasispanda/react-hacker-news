import PropTypes from "prop-types";
import "./Pagination.css";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, loading }) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = totalPages <= currentPage + 1;

  const previousPage = isFirstPage ? currentPage : currentPage - 1;
  const nextPage = isLastPage ? currentPage : currentPage + 1;

  return (
    <div className="Pagination">
      <Link
        to={`/${previousPage}`}
        className={isFirstPage || loading ? "disabled" : ""}
      >
        Previous
      </Link>{" "}
      |
      <Link
        to={`/${nextPage}`}
        className={isLastPage || loading ? "disabled" : ""}
      >
        Next
      </Link>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  loading: PropTypes.bool,
};

export default Pagination;
