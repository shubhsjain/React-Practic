import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
            //SHORT CIRCUIT OPERATOR WILL ONLY RENDER THE GIVEN OR NOTHING
    
            render(){
        return(
        this.state.isLoggedIn && <div>JAI MAHARASHTRA</div>
        )
    }

           // SIMPLESTCAN BE USED INSIDE JSX  TURNARY FIRST COME FIRST OUT
    
    //   render(){
    //     return(
    //         this.state.isLoggedIn ?
    //         <div>Welcome Shubhs</div> :
    //         <div>Welcome Guest</div>
    //     )
    // }

    
                // VARIABLE INSIDE RENDER METHOD
    // render() {
    //     let message           
    //     if (this.state.isLoggedIn){
    //         message = <div>Welcome Shubhs</div>
    //     } else{
    //         message = <div>Welcome Guest</div>
    //     }

    //     return(
    //         <div>{message} </div>

    //     )
    // }

                // IF ELSE STATEMENT 
        // render() {
        // if(this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Shubhs</div>
        //     )
        // }
        //     else {
        //         return(
        //             <div>Welcome Guest</div>
        //         )
        //     }
        // }

                    // NORMALLY
        // render() {
        // return (
        //     <div>
        //         <div>Welcome Shubhs</div>
        //         <div>welcome Guest</div>
        //     </div>
        // )
        // }
    
}

export default UserGreeting
