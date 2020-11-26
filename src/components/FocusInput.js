import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef =React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref= {this.componentRef}/>    { /** refs cannot be attacged to function comp it always should be in class component */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
