import React from "react";
import "../css/BlogPost.css";

class MinBlogPost extends React.Component {
    render() {
        return(
            <div className="container-fluid blog-post">
                <h3>{this.props.postTitle}</h3><br/><br/>
                <p>{this.props.postBody}</p>
                <a href={process.env.PUBLIC_URL + '/blog/' + this.props.postId }>Read More</a>
                <br/><br/>
            </div>
        )
    }
}

export default MinBlogPost;