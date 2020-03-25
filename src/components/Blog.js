import React from "react";
import BlogPost from "./BlogPost";
import "../css/Blog.css";

class Blog extends React.Component {

    getBlogPosts() {
        const blogPosts = [
            {id: 1, title: 'Blog Post 1', content: ''},
            {id: 2, title: 'Blog Post 2', content: ''},
            {id: 3, title: 'Blog Post 3', content: ''}
          ];

        return blogPosts.map((post) => 
            <BlogPost key={post.id} postTitle={post.title} postBody={post.content}/>
        )
    }
    

    render(){
        let posts = this.getBlogPosts();
        return (
            <div className="container">
                {posts}
            </div>
        )
    }
}

export default Blog