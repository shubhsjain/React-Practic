import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

    static contextType = UserContext
    // IN OPTION TO TO ABOVE CODE WE CAN USE ComponentE.contextType = UserContext      the above code works only with class component

    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE
