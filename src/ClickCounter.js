import React, { Component } from 'react'
import UpdatedComp from './components/withCounter'


export class ClickCounter extends Component {
    
    
    render() {
        const {count, incrementCount}= this.props
        return (
        <div>
            <button onClick={incrementCount}>Click {count} times</button>
         </div>
            
        )
    }
}

export default UpdatedComp(ClickCounter)
