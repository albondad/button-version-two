import React, {Component} from 'react';

class Button extends Component {
    constructor(id, style, onFlickFunction, buttonText, link) {
        super();

        //setting up states
        this.state = {
            id: id,
            style: style,
            onClickFunction: onFlickFunction,
            buttonText: buttonText,
            link: undefined,
        }
    }
    render() {
        return (
            <a href={this.state.link} target="_blank">
                <div id={this.state.id} className="button" style={this.state.style} onClick={this.state.onClickFunction}>
                    <p>{this.state.buttonText}</p>
                </div>
            </a>
        )
    }
    setStyle(style) {
        this.state.style=style
        this.setState({style: this.state.style})
    }
}

export default Button;
