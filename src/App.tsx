import { Content } from './components/layout/Content';
import { Layout } from './components/layout/Layout';
import { Sidebar } from './components/layout/sidebar/Sidebar';

export const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Content />
    </Layout>
  );
}

