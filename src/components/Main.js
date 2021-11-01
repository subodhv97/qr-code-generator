import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import canvasToImage from 'canvas-to-image';
import { Button } from 'react-bootstrap';
import DownloadCanvasAsImage from './DownloadCanvasAsImage';
const canvasEl = document.getElementById('qrelement');
class Main extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ""
        }
    }

    



    render() {
        console.warn(this.state.inputText);
        return (
            <div className="qrbox" >

                <div className="qrbox-input">
                    <label>Text Goes here!</label>
                    <br />
                    <br />
                    <input className="textinput" type="text" value={this.state.inputText} placeholder="text goes here!" onChange={e => this.setState({ inputText: e.target.value })}></input>
                    <br />
                    <input type="reset" value="Clear text box"></input>
                </div>
                <div className="qrbox-output" style={{ border: "black" }}>
                    <QRCode

                        id="qrelement"
                        size={200}
                        value={this.state.inputText} />
                </div>
                <div>
                    {/* <Button onClick={DownloadCanvasAsImage()}>Download</Button> */}
                </div>
              




            </div>
        );
    }
}

export default Main;