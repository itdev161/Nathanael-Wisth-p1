import React from 'react';
import './BFInterpreter.css';

export default class BFInterpreter extends React.Component{
    render(){
        return(
            <div className="Card">
                <header className="Card-header">BF Interpreter</header>
                <div id="bf-int">
                    <div id="bf-inputoutput">
                        <textarea id="bf-input" name="bf-input" rows="5" cols="50">

                        </textarea>
                        <div id="bf-output">
                            <h3>Output</h3>
                            <p><br/></p>
                        </div>
                    </div>
                    <div id="bf-buttons">
                        <button className="buttons">Run</button>
                        <button className="buttons">Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}