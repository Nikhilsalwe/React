import React, { Component } from 'react';
import DigitalClock from './DigitalClock'; 
import AnalogClock from './AnalogClock'; 
import Logger from './Logger'; 

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTime : new Date().toLocaleString(),
            counter: 0
        }

        this.updateTime();
    }

    updateTime(){
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString(),
                counter: this.state.counter + 1
            })
        },1000)
    }

  render(){
    return(
        <div>
            {
                (this.state.counter < 2) ? <Logger time={this.state.currentTime} /> : <div>"Hide"</div>
            }
            
            <AnalogClock time={this.state.currentTime} />
            <DigitalClock time={this.state.currentTime}/>
        </div>
    )
  }
}
export default Clock;
