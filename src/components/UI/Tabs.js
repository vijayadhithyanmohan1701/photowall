import React, {Component} from 'react';

function Tabs(props){
    return(
        <div>
            <ul className ="nav-tabs">
                <li>
                    <a className = {
                        props.currentScreen === 'photos' ? "nav-tab-links active" : "nav-tab-links"
                    } href="#home" onClick = {() => {
                        props.onNavigate('photos')
                    }}>Photos</a>
                </li>
                <li>
                    <a className = {
                        props.currentScreen === 'archives' ? "nav-tab-links active" : "nav-tab-links"
                    } href="#archives" onClick = {() => {
                        props.onNavigate('archives')
                    }}>Archived</a>
                </li>
            </ul>
        </div>
    )
}
export default Tabs;