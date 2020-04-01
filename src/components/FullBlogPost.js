import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import DomPurify from 'dompurify';

import "../css/BlogPost.css";

const FullBlogPost = () => {
    const [post, setPost] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        const options = {
            method: 'GET',
            mode: 'cors'
        };
        
        fetch("https://blog-microservice.herokuapp.com/blog/posts/" + id, options)
            .then(response => response.json())
            .then(result => {
                setPost(result);
                setLoaded(true);
            },
            (error) => {
                setLoaded(true);
                setError(error);
              }
            )
    })

    if (error) {
        return (
            <div className="container">
                <p>An error occurred loading blog this blog post... try again later.</p>
            </div>
        )
    }
    else if (!isLoaded) {
        return (
            <div className="container">
                <p>Loading blog post...</p>
            </div>
        )
    } else {
        const htmlData = {__html: DomPurify.sanitize(post.content)};
        return (
            <div className="container-fluid blog-post">
                <h3>{post.title}</h3><br/><br/>
                <div dangerouslySetInnerHTML={htmlData}></div>
                <br/><br/>
            </div>
        )
    }

}

export default FullBlogPost;