import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
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

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
            <div>
                LifeCycle A
            </div>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
