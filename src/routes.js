import Dashboard from './components/Dashboard/Dashboard';
import UsersList from "./components/Users/UsersList";
import SaveUser from "./components/Users/SaveUser";

const routes = [
    {path: '/', exact: true, name: 'Home'},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},
    {path: '/users', name: 'Users', component: UsersList},
    {path: '/user', name: 'Save User', component: SaveUser},
    {path: '/user/:userId', exact: true, name: 'Save User', component: SaveUser}
];

export default routes;