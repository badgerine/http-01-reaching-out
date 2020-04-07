import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active">Posts</NavLink></li>
                            <li>{this.state.auth ? (<NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}
                                activeStyle={{
                                    color: '#fa590f',
                                    textDecoration: 'underline'
                                }}
                            >New Post</NavLink>) :null}</li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/new-post"  render={() => <h1>Say something funny</h1>}/> */}

                <Switch>{/*ensure 1 route is loaded */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect exact from ="/" to="/posts"/>
                    <Route render={() => <h1>Not Found</h1>}/>
                    
                </Switch>

            </div>
        );
    }
}

export default Blog;