import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {List, Card} from "antd";

import {
  setArticles,
  setSelectedArticle,
} from "../../features/articles/articleSlice";
import {fetchArticles} from "../../features/articles/articleAPI";
import {Link} from "react-router-dom";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        dispatch(setArticles(data));
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleArticleClick = (article) => {
    dispatch(setSelectedArticle(article));
  };

  const articlesWithImages = articles.filter((item) => item.urlToImage);

  return (
    <List
      grid={{gutter: 16, column: 2}}
      dataSource={articlesWithImages}
      renderItem={(item) => (
        <List.Item onClick={() => handleArticleClick(item)}>
          <Link to={`/article/${item.title}`}>
            {" "}
            <Card
              hoverable
              cover={<img alt={item.title} src={item.urlToImage} />}>
              <h3>{item.title}</h3>
              <p>Author: {item.author}</p>
              <p>{item.description}</p>
              <p>Published At: {item.publishedAt}</p>
              <p>Source: {item.source?.name}</p>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default ArticleList;
