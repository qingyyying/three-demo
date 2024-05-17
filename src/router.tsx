import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Pdb } from "./views";
import { Layout } from "antd";

const { Sider, Content } = Layout;

export const BASE_URL = "three-demo";

 export const routes = [
  {
    path: `${BASE_URL}`,
    element: <App />,
  },
  {
    path: `${BASE_URL}/pdb`,
    element: <Pdb />,
    _info: {
      title: 'pdb查看器'
    }
  },
].map((item) => {
  return { ...item, element: <Refresh>{item.element}</Refresh> };
});


function Refresh({ children }) {
  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export const router = createBrowserRouter(routes);
