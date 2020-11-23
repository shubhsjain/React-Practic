import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Welcome Visitor'
        }
        // ONLY NECESSORY IN THIRD OPTION IN RETURN.
        // this.changeMessage= this.changeMessage.bind(this)
    }
    
    // changeMessage(){
    //     this.setState({
    //         message : 'Thank you for subscribing'
    //     })
    //     console.log(this)
    // }


    //  THIS IS THE FOURTH OPTION TO CHANGE MESSAGE AS CLASS PROPERTY

    changeMessage = () => {
        this.setState({
            message: 'Thank you for Subscribing.'
        })
    }

    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>

              {/* {THIS IS ANOTHER METHOD TO WORK WITH ARROW FUNCTION} */}

             {/* <button onClick ={() => this.changeMessage()}>Subscribe</button> */}

             {/* THIS IS WITHOUT ARROW FUNCTION */}

              {/* <button onClick ={this.changeMessage.bind(this)}>Subscribe</button> */}


              {/* THIS IS WITHOUT THE BOTH BUT NEED TO STATE WHAT IS THIS.CHANGEMESSAGE */}

              <button onClick ={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}

export default Message
