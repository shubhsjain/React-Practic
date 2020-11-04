import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure Component")
        return (
            <div>I'm the Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
