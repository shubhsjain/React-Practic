import React from 'react'

// const UpdatedComp = OriginalComp => {
//     class NewComp extends React.Component
    
const withCounter = WrapedComponent => {
    class withCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount = () => {
            this.setState(prevState =>{
                return {count: prevState.count +1}
            })
        }
        render(){
            return <WrapedComponent 
            // OriginalComp 
            count={this.state.count} incrementCount={this.incrementCount} name='shubh' />;

        }
    }
    return  withCounter
    // NewComp;
}
export default withCounter;