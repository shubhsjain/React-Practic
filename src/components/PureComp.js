import React, { Component } from 'react'

export class PureComp extends Component {
    render() {
        console.log("jai maharashtra")
        return (
            <div>
                I'm the Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp