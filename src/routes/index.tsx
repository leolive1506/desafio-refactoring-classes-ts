import { Routes as RoutesComponoent, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes = () => (
    <RoutesComponoent>
      <Route path="/" element={<Dashboard />} />
    </RoutesComponoent>

);

export default Routes;
