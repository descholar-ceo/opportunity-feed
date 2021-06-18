import { Route, Switch } from 'react-router-dom';
import OpportunityList from '../containers/OpportunityList';
import PersonList from '../containers/PersonList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={OpportunityList} />
    <Route exact path="/people" component={PersonList} />
  </Switch>
);

export default Routes;
