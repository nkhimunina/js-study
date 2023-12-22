import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            audioID: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
        const letterID = event.target.innerHTML[0];
        this.playAudio(letterID);
        this.getAudioID(letterID);
    }

    componentDidMount(){
        document.addEventListener('keydown', (event) => {
            const letterID = event.key.toUpperCase();
            if (letterID === 'Q' || letterID === 'W' || letterID === 'E' || 
                letterID === 'A' || letterID === 'S' || letterID === 'D' || 
                letterID === 'Z' || letterID === 'X' || letterID === 'C') {
                    this.playAudio(letterID);
                    this.getAudioID(letterID);
            }
        });
    }

    playAudio(letterID) {
        const audio = document.getElementById(letterID);
        audio.currentTime = 0;

        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
            });
        }
    }

    getAudioID(letterID) {
        const buttonList = [...document.getElementsByClassName("drum-pad")];
        buttonList.forEach((element) => {
            if (element.textContent === letterID) {
                this.setState({
                    audioID: element.id.replaceAll("-", " "),
                });
            }
        });
    }
  
    render() {
        return (
            <div id="drum-machine" class="container-fluid vh-100 text-center d-flex flex-column align-items-center justify-content-center">
                <div 
                    class="d-flex align-items-center justify-content-center border border-primary rounded-top m-2 bg-primary text-white" 
                    style={{"width": 400, "height": 100}}
                >
                    <div id="display">{this.state.audioID}</div>
                </div>
                <div 
                    id="drum-pad-container"
                    class="d-flex flex-wrap align-items-center justify-content-center border border-primary rounded-bottom p-4" 
                    style={{"width": 400, "height": 400}}
                >
                    <button class="drum-pad btn btn-primary m-2" id="Heater-1" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        Q<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" class="clip" id="Q"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Heater-2" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        W<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" class="clip" id="W"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Heater-3" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        E<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" class="clip" id="E"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Heater-4" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        A<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" class="clip" id="A"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Clap" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        S<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" class="clip" id="S"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Open-HH" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        D<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" class="clip" id="D"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Kick-n'-Hat" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        Z<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" class="clip" id="Z"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Kick" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        X<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" class="clip" id="X"></audio>
                    </button>
                    <button class="drum-pad btn btn-primary m-2" id="Closed-HH" onClick={this.handleClick} style={{"width": 100, "height": 100}}>
                        C<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" class="clip" id="C"></audio>
                    </button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));