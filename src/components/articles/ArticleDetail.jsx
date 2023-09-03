import React from "react";
import {useSelector} from "react-redux";
import {Typography, Row, Col, Image} from "antd";

const {Title, Text} = Typography;

const ArticleDetail = () => {
  const selectedArticle = useSelector(
    (state) => state.articles.selectedArticle
  );

  return (
    <div style={{padding: "24px"}}>
      {selectedArticle && (
        <div>
          <Title level={2}>{selectedArticle.title}</Title>
          <Row gutter={16}>
            {selectedArticle.urlToImage && (
              <Col xs={24} sm={12}>
                <Image
                  src={selectedArticle.urlToImage}
                  alt={selectedArticle.title}
                />
              </Col>
            )}
            <Col xs={24} sm={selectedArticle.urlToImage ? 12 : 24}>
              <Text strong>Author:</Text> {selectedArticle.author}
              <br />
              <Text strong>Description:</Text> {selectedArticle.description}
              <br />
              <Text strong>Published At:</Text> {selectedArticle.publishedAt}
              <br />
              <Text strong>Source:</Text> {selectedArticle.source?.name}
              <br />
              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noopener noreferrer">
                Read more
              </a>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
