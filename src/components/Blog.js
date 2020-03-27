import React from "react";
import BlogPost from "./BlogPost";
import "../css/Blog.css";

class Blog extends React.Component {

    getBlogPosts() {
        const blogPosts = [
            {id: 1, title: 'Blog Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ligula, bibendum sit amet ex eu, pharetra dignissim dui. Nunc sed imperdiet ligula, vitae ultricies justo. Donec vehicula pellentesque ligula. Integer sit amet diam finibus, blandit ligula a, pretium enim. Suspendisse semper neque rhoncus mattis lobortis. Ut commodo mollis nunc. Donec vehicula, nibh vel eleifend facilisis, purus odio efficitur nunc, nec facilisis enim dui ut enim. Phasellus et dolor eu massa aliquet vehicula varius et risus.'},
            {id: 2, title: 'Blog Post 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ligula, bibendum sit amet ex eu, pharetra dignissim dui. Nunc sed imperdiet ligula, vitae ultricies justo. Donec vehicula pellentesque ligula. Integer sit amet diam finibus, blandit ligula a, pretium enim. Suspendisse semper neque rhoncus mattis lobortis. Ut commodo mollis nunc. Donec vehicula, nibh vel eleifend facilisis, purus odio efficitur nunc, nec facilisis enim dui ut enim. Phasellus et dolor eu massa aliquet vehicula varius et risus.'},
            {id: 3, title: 'Blog Post 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ligula, bibendum sit amet ex eu, pharetra dignissim dui. Nunc sed imperdiet ligula, vitae ultricies justo. Donec vehicula pellentesque ligula. Integer sit amet diam finibus, blandit ligula a, pretium enim. Suspendisse semper neque rhoncus mattis lobortis. Ut commodo mollis nunc. Donec vehicula, nibh vel eleifend facilisis, purus odio efficitur nunc, nec facilisis enim dui ut enim. Phasellus et dolor eu massa aliquet vehicula varius et risus.'}
          ];

        return blogPosts.map((post) => 
            <BlogPost key={post.id} postTitle={post.title} postBody={post.content}/>
        )
    }
    

    render(){
        let posts = this.getBlogPosts();
        return (
            <div className="container">
                <hr/>
                <br/>
                <h2>Recent Thoughts</h2>
                {posts}
            </div>
        )
    }
}

export default Blog