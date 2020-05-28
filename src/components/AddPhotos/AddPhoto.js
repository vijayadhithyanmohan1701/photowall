import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        const imageUrl = event.target.elements.link.value;
        const imageDescription = event.target.elements.description.value;
        const post = {
            id: Number(new Date),
            description: imageDescription,
            imageLink: imageUrl
        }
        if(imageUrl && imageDescription){
            console.log(imageUrl + " - " + imageDescription)
            this.props.onAddPhoto(post)
        }
    }
    render(){
        return(
            <div>
                <Link className = "backToPhotowall" to="/">Return to Photowall</Link>
                <div className="form">
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <input type="submit" placeholder="Post" />
                    </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto;