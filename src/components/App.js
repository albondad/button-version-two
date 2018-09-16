import React, {Component} from 'react';
import Button from "./Button.js";

class App extends Component {
    constructor() {
        super();

        //setting up state
        this.state = {
            clicks: 0,
            buttons: [],
            hiddenSpecialButtons: [],
            visibleSpecialButtons: [],
            start: true,
            showSpecialButtons: false,
            randomLocation: false,
            randomRotation: false,
            randomColor: false,
            randomScale: false,
        };

        //binding functions
        this.buttonClicked = this.buttonClicked.bind(this);

        //create intial button
        this.addButton();

        //special buttons
        this.state.hiddenSpecialButtons.push(new Button("supreme", this.getStyle(), this.buttonClicked, "", "https://www.supremenewyork.com/"));
        this.state.hiddenSpecialButtons.push(new Button("nintendo", this.getStyle(), this.buttonClicked, "", "https://www.nintendo.com/"));
        this.state.hiddenSpecialButtons.push(new Button("gucci", this.getStyle(), this.buttonClicked, "", "https://www.gucci.com/us/en/"));
        this.state.hiddenSpecialButtons.push(new Button("minecraft", this.getStyle(), this.buttonClicked, "", "https://minecraft.net/en-us/"));
        this.state.hiddenSpecialButtons.push(new Button("adidas", this.getStyle(), this.buttonClicked, "", "https://www.adidas.com/us"));
        this.state.hiddenSpecialButtons.push(new Button("athleanX", this.getStyle(), this.buttonClicked, "", "https://athleanx.com/"));
        this.state.hiddenSpecialButtons.push(new Button("disney", this.getStyle(), this.buttonClicked, "", "https://www.disney.com/"));
        this.state.hiddenSpecialButtons.push(new Button("fortnite", this.getStyle(), this.buttonClicked, "", "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"));
        this.state.hiddenSpecialButtons.push(new Button("happyWheels", this.getStyle(), this.buttonClicked, "", "http://www.totaljerkface.com/happy_wheels.tjf"));
        this.state.hiddenSpecialButtons.push(new Button("pubg", this.getStyle(), this.buttonClicked, "", "https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/"));
        this.state.hiddenSpecialButtons.push(new Button("roblox", this.getStyle(), this.buttonClicked, "", "https://www.roblox.com/groups/group.aspx?gid=3063372"));
        this.state.hiddenSpecialButtons.push(new Button("shs", this.getStyle(), this.buttonClicked, "", "https://www.d125.org/"));
        this.state.hiddenSpecialButtons.push(new Button("shsSpace", this.getStyle(), this.buttonClicked, "stevenson.space", "https://www.stevenson.space/"));

    }
    render() {
        return (
            <React.Fragment>
                {this.state.buttons.map(button => button.setStyle(this.getStyle()))}
                {this.state.buttons.map(button => button.render())}
                {this.state.visibleSpecialButtons.map(button => button.setStyle(this.getStyle()))}
                {this.state.visibleSpecialButtons.map(button => button.render())}
                <p id="instructions" style={this.getInstructionsStyle()}>Just keep clicking.</p>
                <p id="clicks" style={this.getClicksStyle()}>Clicks: {this.state.clicks}</p>
                {this.moveSpecialButton()}
            </React.Fragment>
        );
    }

    //EXTRA FUNCTIONS
    buttonClicked() {
        this.setState({start: false});
        if (this.state.clicks >= 9) {
            this.setState({randomLocation: true});
        }
        if (this.state.clicks >= 19) {
            this.addButton();
        }
        if (this.state.clicks >= 29) {
            this.setState({randomRotation: true});
        }
        if (this.state.clicks >= 39) {
            this.setState({randomColor: true});
        }
        if (this.state.clicks >= 49) {
            this.setState({randomScale: true});
        }
        if (this.state.clicks >= 48) {
            this.setState({showSpecialButtons: true});
        }

        this.setState({clicks: this.state.clicks + 1});
    }
    addButton() {
        this.state.buttons.push(new Button("surpreme", this.getStyle(), this.buttonClicked, "button"));
    }
    moveSpecialButton() {
        var randomIndex=Math.floor(Math.random()*this.state.hiddenSpecialButtons.length)
        console.log(((this.state.clicks+1)%5==0) && this.state.clicks!=0 && this.state.hiddenSpecialButtons.length!=0 && this.state.showSpecialButtons);
        if (((this.state.clicks+1)%5==0) && this.state.clicks!=0 && this.state.hiddenSpecialButtons.length!=0 && this.state.showSpecialButtons) {
            this.state.visibleSpecialButtons.push(this.state.hiddenSpecialButtons[randomIndex]);
            //this.state.hiddenSpecialButtons.splice(randomIndex, 1);
        }
    }
    getStyle() {
        var style = {
            backgroundSize: "contain",
            backgroundColor: this.getColor(),
            top: this.getYLocation(),
            left: this.getXLocation(),
            transform: this.getRotation() + this.getScale(),
        };
        return style;
    }
    getClicksStyle() {
        if (!this.state.start) {
            return {opacity: 1};
        }
    }
    getInstructionsStyle() {
        if (!this.state.start) {
            return {opacity: 0};
        }
    }
    getXLocation() {
        var xLoc;
        if (this.state.randomLocation) {
            xLoc = "calc(100vw * " + Math.random() + " - 100vw * .125 / 2)";
        }
        return xLoc;
    }
    getYLocation() {
        var yLoc;
        if (this.state.randomLocation) {
            yLoc = "calc(100vh * " + Math.random() + " - 100vw * .125 /2 / 2)";
        }
        return yLoc;
    }
    getColor() {
        var color;
        if (this.state.randomColor) {
            color = "rgba(" + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 255) + ")";
        }
        return color;
    }
    getRotation() {
        var rotation = "";
        if (this.state.randomRotation) {
            rotation = "rotate(calc("+ Math.random() + " * 360deg))";
        }
        return rotation;
    }
    getScale() {
        var scale = "";
        if (this.state.randomScale) {
            scale = "scale(calc(" + Math.random() + " + .5))";
        }
        return scale;
    }
}

export default App;
