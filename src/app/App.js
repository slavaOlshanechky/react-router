import Navbar from "./components/navbar";
import {Route, Switch} from 'react-router-dom'
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";
import Stats from "./components/stats";
import Posts from "./components/posts";

function App() {
    return (
        <div>
            <Navbar/>
            <h1>App</h1>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/dashboard/stats' component={Stats}/>
                {/*first method when we use component as is*/}
                <Route path='/dashboard' component={Dashboard}/>
                {/*second method when we want to customize props of the component*/}
                {/*<Route path='/dashboard' render={(props)=>(<Dashboard isAdmin={false} {...props}/>)}/>*/}
                <Route path='/login' component={Login}/>
                {/*<Route path='/posts/:postId' component={Posts}/>*/}
                {/*<Route path='/posts' component={Posts}/>  */}
                {/*<Route path='/posts/:postId?'*/}
                {/*       render={(props) =>*/}
                {/*           (<Posts {...props}/>)}/> */}
                <Route path='/posts/:postId?' component={Posts}/>
                {/*example with two params*/}
                {/*<Route path='/posts/:postId?/:display?' component={Posts}/>*/}
                {/*<Route path='/posts/:postId?'*/}
                {/*       render={(props) =>*/}
                {/*           (<Post posts={posts} {...props}/>)}/>*/}
                {/*<Route path='/posts'*/}
                {/*       render={(props) =>*/}
                {/*           (<PostsList posts={posts} {...props}/>)}/>*/}
            </Switch>
        </div>
    );
}

export default App;
