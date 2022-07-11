import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import AdminOrder from "./pages/admin/AdminOrder";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminRoom from "./pages/admin/AdminRoom";
import AdminService from "./pages/admin/AdminService";

function App() {
  return (
    <Router>
      <AdminLayout>
        <Switch>
          <Route path="/" exact={true}>
            <AdminOverview />
          </Route>

          <Route path="/admin" exact={true}>
            <AdminOverview />
          </Route>

          <Route path="/admin/room" exact={true}>
            <AdminRoom />
          </Route>

          <Route path="/admin/service" exact={true}>
            <AdminService />
          </Route>

          <Route path="/admin/orders" exact={true}>
            <AdminOrder />
          </Route>
        </Switch>
      </AdminLayout>
    </Router>
  );
}

export default App;
