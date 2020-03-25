import React from "react";
import "../css/BlogPost.css";

class BlogPost extends React.Component {
    render() {
        return(
            <div className="container-fluid blog-post">
                <h3>{this.props.postTitle}</h3>
                <p>{this.props.postBody}</p>
                <br/><br/>
            </div>
        )
    }
}

export default BlogPost;