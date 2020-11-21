import React, { Component } from 'react'


//      DESTRUCTURING THE PROPS OR STATE {IN CLASS}


class Welcome extends Component {
    render() {
        const {name, heroName, children} = this.props
        // const {state1, state2} = this.state
        return (
            <div>
    <h1> Hello {name} a.k.a {heroName}</h1>
    {children}
    </div>
        )
    }
}

export default Welcome
