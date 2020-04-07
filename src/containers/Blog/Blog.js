import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {

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
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}
                                activeStyle={{
                                    color: '#fa590f',
                                    textDecoration: 'underline'
                                }}
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/new-post"  render={() => <h1>Say something funny</h1>}/> */}

                <Switch>{/*ensure 1 route is loaded */}
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from ="/" to="/posts"/>
                </Switch>

            </div>
        );
    }
}

export default Blog;