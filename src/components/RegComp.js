import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("jai maharastra")
        return (
            <div>
               I'm the Regular component {this.props.name} 
            </div>
        )
    }
}

export default RegComp
