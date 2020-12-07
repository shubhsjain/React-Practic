import React from 'react'

// const UpdatedComp = OriginalComp => {
//     class NewComp extends React.Component
    
const withCounter = (WrapedComponent, incrementNumber) => {
    class withCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount = () => {
            this.setState(prevState =>{
                return {count: prevState.count + incrementNumber}
            })
        }
        render(){
            return <WrapedComponent 
            // OriginalComp 
            count={this.state.count} incrementCount={this.incrementCount} name='shubh' />;
                
            // CHECH THE NOTES WRITTEN BELOW
        }
    }
    return  withCounter
    // NewComp;
}
export default withCounter;


// {...this.props}      THIS WILL PASS THE WHATEVER REM AINING PROPS THAT ARE SPECIFIED
// SUPPOSE WE PASS NAME PROP IN APP COMPONENT THEN WHAT WE NEED TOI DO IS PASS THE ABOVE IN HIGHER ORDER COMPONENT AND REMEMBER TO SPECIFY THAT PROP IN THE SPECIFIC LINE IN SPECIFIC COMPONENT
// ABOVE WE ADDED INCREMENTNUMBER WITH WRAPEDCOMPONENT IT'S BECAUSE IF WE NEED TO INCREMENT THE NUMBER IN MULTIPLE (INSTED OF + 1 ) AND ALSO DON'T FORGET TO ADD THE SPECIFIC NO.  IN THE SPECIFIC COMPONENT 