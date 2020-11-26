import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInpur extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    clickHandler =() => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInpur
// refs forwarding is shortly used .. dont worry to much about it