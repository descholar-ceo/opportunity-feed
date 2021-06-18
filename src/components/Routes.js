import { Route, Switch } from 'react-router-dom';
import OpportunityList from '../containers/OpportunityList';
import PersonList from '../containers/PersonList';
import PersonDetails from '../containers/PersonDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={OpportunityList} />
    <Route exact path="/people" component={PersonList} />
    <Route exact path="/people/details/:username" component={PersonDetails} />
  </Switch>
);

export default Routes;
