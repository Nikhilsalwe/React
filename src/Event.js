import React, { Component } from 'react';
import Counter from './Counter';
class MyEvents extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }

        // second way to bind this to event it will update this whereever we use this increamentCounter event
        this.increamentCounter = this.increamentCounter.bind(this);
        this.increamentCounterPassToChild = this.increamentCounterPassToChild.bind(this);
        this.decrementCounterPassToChild = this.decrementCounterPassToChild.bind(this);
    }
    clickHandler(){
        console.log('First Button')
    }

    increamentCounter(){
        this.setState({
            counter: this.state.counter+1
        })
    }

    increamentCounterPassToChild(){
        console.log('this function passing to child')
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementCounterPassToChild(){
        console.log('this function passing to child')
        if(this.state.counter === 0){
            console.log('reach minimum level')    
        } else {
            this.setState({
                counter: this.state.counter - 1
            })    
        }        
    }
    getParameter(param, ev){
        console.log('here is my param: - ', param)
        console.log('here is my event: - ', ev)
    }
    render(){
        return(
            <div>
                <Counter counter={this.state.counter} increment={this.increamentCounterPassToChild} decrement={this.decrementCounterPassToChild}/>
                <h1>Hello Events</h1>
                <button onClick={function(){
                    console.log('First Button')
                }} >First Button!</button>

                <button onClick={this.clickHandler}>Second Button!</button>
                <br/>
                {/* first way to bind event if we are using some vavriable value and have single event */}
                {/* <button onClick={this.increamentCounter.bind(this)}>+</button> */}

                <button onClick={this.increamentCounter}>+</button>
                <br/>
                <span>{this.state.counter}</span>
                <button onClick={this.getParameter.bind(this, "Hello")}>check Event and Parameter</button>
                <br/>
            </div>
        )
    }
}
export default MyEvents;
