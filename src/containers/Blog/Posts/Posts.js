import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
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
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong whilst retrieving posts!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post =>
                <Link to={"/:id"+post.id} key={post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                </Link>
            );
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;