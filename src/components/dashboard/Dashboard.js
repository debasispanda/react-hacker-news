import { useState, useEffect } from "react";
import NewsTable from "../news-table/NewsTable";
import NewsTimeline from "../news-timeline/NewsTimeline";
import Pagination from "../pagination/Pagination";
import fetchNews from "../../api/NewsAPI";
import { useParams } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const { page } = useParams();
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNews(page).then(
      (res) => {
        setNews(res.hits);
        setTotalPages(res.nbPages);
        setLoading(false);
      },
      (err) => {
        setNews([]);
        console.error(err);
        setLoading(false);
      }
    );
  }, [page, setTotalPages, setLoading]);

  const onHideNews = (newsId) => {
    console.log(newsId);
  };

  const onUpvoteNews = (news) => {
    const { objectID, points } = news;
    console.log(objectID, points);
  };

  return (
    <div className="Dashboard">
      <NewsTable
        news={news}
        onHideNews={onHideNews}
        onUpvoteNews={onUpvoteNews}
      ></NewsTable>
      <Pagination
        totalPages={totalPages}
        currentPage={+page}
        loading={loading}
      ></Pagination>
      <NewsTimeline news={news}></NewsTimeline>
    </div>
  );
};

export default Dashboard;
