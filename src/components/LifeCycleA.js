import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "shubham"
        }
        console.log("LifeCycleA Comstructor")
    }

    static getDrivedStateFromProps (props, state) {
        console.log("LifeCycleA GetDrivedStateFromProps")
        return null 
    }
    
    componentDidMount() {
        console.log("LifeCycle A componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate (prevprops , prevstate) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentdidUpdate")
    }
    changeState = () => {
        this.setState({
            name : "shubham Jain"
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
            <div>
                LifeCycle A
            </div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
