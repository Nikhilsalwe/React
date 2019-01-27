import React from 'react';

function AnalogClock(props){
    let time = new Date(props.time);

    let secondHead = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height:1,
        transform: 'rotate(' + ((time.getSeconds()/60)*360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    }
    let minuteHead = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid yellow',
        width: '40%',
        height:3,
        transform: 'rotate(' + ((time.getMinutes()/60)*360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'yellow'
    }

    let hourHead = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid yellow',
        width: '20%',
        height:3,
        transform: 'rotate(' + ((time.getHours()/12)*360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'yellow'
    }   
    
    let clockContainer = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height:200,
        borderRadius: 20000,
        boderStyle: 'solid',
        borderColor: 'black'
    }
    return ( 
        <div style={clockContainer}>
            <div style={secondHead}></div>
            <div style={minuteHead}></div>
            <div style={hourHead}></div>
        </div>
    )
}

  
export default AnalogClock;
