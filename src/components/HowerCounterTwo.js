import React, { Component } from 'react'

export class HowerCounterTwo extends Component {
    
    
    render() {
        const{count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Howered {count} times</h2>
            </div>
        )
    }
}

export default HowerCounterTwo
