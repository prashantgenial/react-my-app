import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initFetchPosts } from '../store/actions';

class Posts extends Component {

    componentWillMount(){
        this.props.initFetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const posts = this.props.posts.map( post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { initFetchPosts })(Posts);