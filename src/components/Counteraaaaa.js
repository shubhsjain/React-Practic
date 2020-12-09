import React, { Component } from 'react'
import UpdatedComp from './HigherOrder'

export class Counter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             count:0
        }
    }
    IncrementCount = () => {
          this.setState({count: this.state.count + 1})
    }
    
    increment() {
        // this.setState(
        //     {
        //         count : this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     }
        // )

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
    const{count} = this.state
        return (
            <div>
                
                <button onClick={() => this.incrementFive()}>Increment</button>
            
                <button onMouseEnter ={this.IncrementCount}> 
                {this.props.name} Incremented to {count}</button>
            </div>
            
        )
    }
}

export default UpdatedComp(Counter);
