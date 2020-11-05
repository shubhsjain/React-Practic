import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "shubham"
        }
        console.log("LifeCycleB Comstructor")
    }

    static getDrivedStateFromProps (props, state) {
        console.log("LifeCycleB GetDrivedStateFromProps")
        return null 
    }
    
    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
    }
    
    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate (prevprops , prevstate) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleB componentdidUpdate")
    }

    render() {
        console.log("LifeCycleB render")
        return (
        
            <div>
                LifeCycle B
            </div>
            
        )
    }
}

export default LifeCycleB
