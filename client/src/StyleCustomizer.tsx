import React from 'react';
import { ChromePicker } from 'react-color';
import './StyleCustomizer.css';

export default class StyleCustomizer extends React.Component{
    state = {
        picked: '#ffffff',
        background: '#82eb79',
        primary: '#00cc00',
        dark: '#00773c'
    }

    handlePicked = (color) => {
        this.setState({picked: color.hex});
    }

    handleChangeBG = () => {
        this.setState({background: this.state.picked}, this.changeBG);
    }

    changeBG = () => {
        var cards = Array.from(document.getElementsByClassName("App") as HTMLCollectionOf<HTMLElement>);
        for(var i=0; i<cards.length; i++){
            cards[i].style.backgroundColor = this.state.background;
        }
    }

    handleChangePrim = () => {
        this.setState({primary: this.state.picked}, this.changePrim);
    }

    changePrim = () => {
        var cards = Array.from(document.getElementsByClassName("Card") as HTMLCollectionOf<HTMLElement>);
        for(var i=0; i<cards.length; i++){
            cards[i].style.backgroundColor = this.state.primary;
        }
    }

    handleChangeTitle = () => {
        this.setState({dark: this.state.picked}, this.changeTitle);
    }

    changeTitle = () => {
        var cards = Array.from(document.getElementsByClassName("Card-header") as HTMLCollectionOf<HTMLElement>);
        for(var i=0; i<cards.length; i++){
            cards[i].style.backgroundColor = this.state.dark;
        }
    }

    changeToDefault = () => {
        this.setState({
            picked: '#ffffff',
            background: '#82eb79',
            primary: '#00cc00',
            dark: '#00773c'
        }, this.setDefault);
    }

    setDefault = () => {
        var cards = Array.from(document.getElementsByClassName("App") as HTMLCollectionOf<HTMLElement>);
        for(var i=0; i<cards.length; i++){
            cards[i].style.backgroundColor = this.state.background;
        }
        cards = Array.from(document.getElementsByClassName("Card") as HTMLCollectionOf<HTMLElement>);
        for(var i=0; i<cards.length; i++){
            cards[i].style.backgroundColor = this.state.primary;
        }
        cards = Array.from(document.getElementsByClassName("Card-header") as HTMLCollectionOf<HTMLElement>);
        for(var i=0; i<cards.length; i++){
            cards[i].style.backgroundColor = this.state.dark;
        }
    }

    render(){
        return (
            <div className="Card">
                <header className="Card-header">Style Customizer</header>
                <div id="customizer">
                    <ChromePicker
                        color={this.state.picked}
                        onChangeComplete={this.handlePicked}
                    />
                    <div id="customizer-buttons">
                        <button onClick={this.handleChangeBG}>Change Background</button>
                        <button onClick={this.handleChangePrim}>Change Primary Color</button>
                        <button onClick={this.handleChangeTitle}>Change Header Color</button>
                        <button onClick={this.changeToDefault}>Revert To Default</button>
                    </div>
                </div>
            </div>
        );
    }
}