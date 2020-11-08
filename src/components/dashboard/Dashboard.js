import React, { useState, useEffect } from 'react';
import NewsTable from '../news-table/NewsTable';
import NewsTimeline from '../news-timeline/NewsTimeline';
import fetchNews from '../../api/NewsAPI';
import { useParams } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ setTotalPages, setCurrentPage, setLoading }) => {
  const [ news, setNews ] = useState([]);
  const { page } = useParams();
  
  useEffect(() => {
    setCurrentPage(+page);
    setLoading(true);
    fetchNews(page).then(
      res => {
        setNews(res.hits);
        setTotalPages(res.nbPages);
        setLoading(false);
      },
      err => {
        setNews([]);
        console.error(err);
        setLoading(false);
      }
    );
  }, [ page, setTotalPages, setCurrentPage, setLoading ]);

  const onHideNews = (newsId) => {
    console.log(newsId);
  }

  const onUpvoteNews = (news) => {
    const { objectID, points } = news;
    console.log(objectID, points);
  }

  return (
    <div className="Dashboard">
      <NewsTable news={news} onHideNews={onHideNews} onUpvoteNews={onUpvoteNews}></NewsTable>
      <NewsTimeline news={news}></NewsTimeline>
    </div>
  )
}

export default Dashboard;
