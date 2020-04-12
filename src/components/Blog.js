import React from "react";
import MinBlogPost from "./MinBlogPost";
import "../css/Blog.css";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false,
            error: null
        }
    }
    
    componentDidMount() {
        const options = {
            method: 'GET',
            mode: 'cors'
        };
        
        fetch("https://blog-microservice.herokuapp.com/blog/posts", options)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    posts: result.posts,
                    isLoaded: true
                });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
    }

    render(){
        const {isLoaded, posts, error} = this.state;
        if (error) {
            return (
                <div className="container">
                    <hr/>
                    <br/>
                    <h2>Recent Thoughts</h2>
                    <p>An error occurred loading blog posts... try again later.</p>
                </div>
            )
        }
        else if (!isLoaded) {
            return (
                <div className="container">
                    <hr/>
                    <br/>
                    <h2>Recent Thoughts</h2>
                    <p>Loading posts...</p>
                </div>
            )
        } else {
            let blogPosts = {};
            if (posts) {
                blogPosts = posts.map((post) => 
                <MinBlogPost key={post.id} postId={post.id} postTitle={post.title} postBody={post.preview}/>
                )
                return (
                    <div className="container">
                        <hr/>
                        <br/>
                        <h2>Recent Thoughts</h2>
                        {blogPosts}
                    </div>
                )
            }
        }
    }
}

export default Blog