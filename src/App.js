import { Route, Switch } from 'react-router-dom';

import AllProgramsPage from './pages/AllPrograms';
import NewProgramPage from './pages/NewProgram';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllProgramsPage />
        </Route>
        <Route path='/new-program'>
          <NewProgramPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
