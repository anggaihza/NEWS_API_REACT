import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import ArticleDetail from "./components/articles/ArticleDetail";
import {Layout} from "antd";
import ArticleList from "./components/articles/ArticleList";

const {Content} = Layout;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
}

export default App;
