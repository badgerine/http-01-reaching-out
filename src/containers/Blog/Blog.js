import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route, NavLink} from 'react-router-dom';

class Blog extends Component {

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                                }}
                                activeStyle={{
                                    color:'#fa590f',
                                    textDecoration:'underline'
                                }}
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/new-post"  render={() => <h1>Say something funny</h1>}/> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={FullPost} />
            </div>
        );
    }
}

export default Blog;