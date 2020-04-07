import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        console.log('#Posts:ComponentDidMount ' + this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);

                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'Sbu' }
                });

                this.setState({ posts: updatedPosts })
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({ selectedPostId: id });
        //navigating after an http request or so...
        this.props.history.push({ pathname: "/posts/" + id }); //can push an object or a string to the stack of pages.
        // this.props.history.push("/posts/" + id);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong whilst retrieving posts!</p>
        if (!this.state.error) {
            posts = <p>...Loading</p>
            posts = this.state.posts.map(post =>
                <Link to={"/posts/" + post.id} key={post.id}>
                    <Post
                        // key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                </Link>
            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;