import React, { Component } from 'react';

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : '',
            allUsers: [],
            radioGroup: {
                MEANSTACK: false,
                FullSTACK: true,
                LAMPSTACK: false
            },
            checkboxGroup: {
                NODE: false,
                ANGULAR: false,
                REACT: true
            },
            selectedValue: 'Node'
        }
        this.formHandler = this.formHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);        
        this.checkboxHandler = this.checkboxHandler.bind(this); 
        this.selectHandler = this.selectHandler.bind(this);
        
    }

    formHandler(event){
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    clickHandler(event){
        //we can not update data directly so we create local variable currentUser and assiging this value in setState
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username)
        currentUser.push(this.state.radioGroup)
        currentUser.push(this.state.checkboxGroup)
        currentUser.push(this.state.selectedValue)
        this.setState({
            allUsers: currentUser,
            username: ''
        });
        console.log(this.state.allUsers)
    }

    radioHandler(event) {
        let radioGroup = this.state.radioGroup;
        for(var key in radioGroup){
            radioGroup[key] = false;
        }

        radioGroup[event.target.value] = event.target.value;
        this.setState({
            radioGroup: radioGroup
        })
        console.log(event.target.value)
    }

    checkboxHandler(event){
        let checkbox = this.state.checkboxGroup;

        checkbox[event.target.value] = event.target.checked;
        this.setState({
            checkboxGroup: checkbox
        })
        console.log(event.target.value)
    }

    selectHandler(event){
        this.setState({
            selectedValue: event.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Hello my Form</h1>
                <input type="text" name="username" value={this.state.username} onChange={this.formHandler} />
                Developer category:-
                <br/>
                <label>
                    Mean Stack <input type='radio' name="devCat" value='MEANSTACK' checked={this.state.radioGroup["MEANSTACK"]} onChange={this.radioHandler}/>
                </label>
                <br/>
                <label>
                    Full Stack <input type='radio' name="devCat" value='FullSTACK' checked={this.state.radioGroup["FullSTACK"]} onChange={this.radioHandler}/>
                </label>
                <br/>
                <label>
                    Lamp Stack <input type='radio' name="devCat" value='LAMPSTACK'checked={this.state.radioGroup["LAMPSTACK"]} onChange={this.radioHandler}/>
                </label>
                <br/>
                Technology category:-
                <br/>
                <label>
                    Node Stack <input type='checkbox' name="tech" value='NODE' checked={this.state.checkboxGroup["NODE"]} onChange={this.checkboxHandler}/>
                </label>
                <br/>
                <label>
                    Angular Stack <input type='checkbox' name="tech" value='ANGULAR' checked={this.state.checkboxGroup["ANGULAR"]} onChange={this.checkboxHandler}/>
                </label>
                <br/>
                <label>
                    React Stack <input type='checkbox' name="tech" value='REACT' checked={this.state.checkboxGroup["REACT"]} onChange={this.checkboxHandler}/>
                </label>
                <br/>

                <select value={this.state.selectedValue} onChange={this.selectHandler}>
                    <option value='Javascript'>Javascript</option>
                    <option value='Node'>Node</option>
                    <option value='Pi'>Pi</option>
                </select>
                <button onClick={this.clickHandler}>Save User Details</button>
                {/* <p>{this.state.username}</p> */}
            </div>
        )
    }
}
export default Form;
