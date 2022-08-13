import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/reactjs'>
          <Coins />
        </Route>
        <Route path='/:coinId'>
          <Coin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
