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
        console.log("LifeCycle A componentDidMount")
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
