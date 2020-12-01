import React from 'react';
import './GitList.css';

export default class GitList extends React.Component{
    render(){
        return(
            <div className="Card">
                <header className="Card-header">GitHub</header>
                <div id="gitlinks">
                    <button className="buttons"><a href="https://github.com/wisthn" target="_blank">School Github</a></button>
                    <button className="buttons"><a href="https://github.com/nategonepro" target="_blank">Personal Github</a></button>
                </div>
            </div>
        );
    }
}