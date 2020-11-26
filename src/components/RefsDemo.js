import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element        // setCbRef = set call back ref
        }
    }
    componentDidMount() {
        if (this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()           //this will focus on the input field right away
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)      // this will give us an alert of the thing we type
    }
    
    render() {
        return (
            <div>
                <input type ="text" ref = {this.inputRef}  ></input>
                <input type ="text" ref = {this.setCbRef} ></input>
                <button onClick ={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
