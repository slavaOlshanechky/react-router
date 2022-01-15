import Navbar from "./components/navbar";
import {Route, Switch,Redirect} from 'react-router-dom'
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";
import Stats from "./components/stats";
import Posts from "./components/posts";
import NotFound from "./components/not-found";

function App() {
    return (
        <div>
            <Navbar/>
            <h1>App</h1>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/dashboard/stats' component={Stats}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/login' component={Login}/>
                <Route path='/posts/:postId?' component={Posts}/>
                <Route path='/404' component={NotFound}/>
                <Redirect from='/admin' to='/dashboard'/>

                <Redirect to='/404'/>

            </Switch>
        </div>
    );
}

export default App;
