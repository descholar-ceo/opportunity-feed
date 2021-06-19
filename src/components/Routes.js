import { Route, Switch } from 'react-router-dom';
import OpportunityList from '../containers/OpportunityList';
import PersonList from '../containers/PersonList';
import PersonDetails from '../containers/PersonDetails';
import OpportunityDetails from '../containers/OpportunityDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={OpportunityList} />
    <Route exact path="/people" component={PersonList} />
    <Route exact path="/people/details/:username" component={PersonDetails} />
    <Route exact path="/opportunity/details/:id" component={OpportunityDetails} />
  </Switch>
);

export default Routes;
