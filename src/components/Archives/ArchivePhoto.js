import React, {Component} from 'react';

function ArchivePhoto(props){
    const post = props.archivePost;
    return(
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}></img>
            <figcaption>
                <p>
                    {post.description}
                </p>
            </figcaption>
        </figure>
    )
}

export default ArchivePhoto;