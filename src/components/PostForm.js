import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts } from '../store/actions/postAction';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };     
        this.props.createPosts(post);
    }

    componentWillMount(){
        
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title:</label><br />
                    <input name="title" type="text" onChange={this.onChange} value={this.state.title} />
                </div>
                <br />
                <div>
                    <label>Body:</label><br />
                    <input name="body" type="text" onChange={this.onChange} value={this.state.body} />
                </div>
                <br />
                <input type="submit" value="submit" />
                </form>
            </div>            
        )
    }
}

// const mapStateToProps = state => ({
//     posts: state.posts.item
// });


export default connect(null,{ createPosts })(PostForm);