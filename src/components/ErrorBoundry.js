import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
    static getDrivedStateFromErroR(error) {
        return {
            hasError: true
        }
    }
    
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return(
              <div>
            <h1>somthing went wrong</h1>
             </div>)
        }
        return this.props.children
    }
}

export default ErrorBoundry
