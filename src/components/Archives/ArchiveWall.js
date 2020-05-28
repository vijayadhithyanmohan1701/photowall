import React, {Component} from 'react';
import ArchivePhoto from './ArchivePhoto';

function ArchiveWall(props){
    return(
        <div className="photoGrid">
            {props.archivedPosts.map((archivePost, index) => <ArchivePhoto key={index} archivePost={archivePost} />)}
        </div>
    )
}

export default ArchiveWall;