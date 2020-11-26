import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "shubham"
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name :"shubham"
            })
        }, 2000)
    }

    render() {
        console.log("jai maharashtra")
        return (
            <div>
                <MemoComp name ={this.state.name}/>
               I'm the Parent 
               {/* <RegComp name ={this.state.name}/>
               <PureComp name ={this.state.name}/> */}

            </div>
        )
    }
}

export default ParentComp


                    /**         ANOTHER WAY             */


// import React, { Component } from 'react'
// import ChildComp from './ChildComp'

// class ParentComp extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              parentName: 'parent'
//         }
//         this.greetParent = this.greetParent.bind(this)
//     }

//     greetParent(childName){
//         alert (`Hello ${this.state.parentName} from ${childName}`)
//     }
    
//     render() {
//         return (
//             <div>
//                 <ChildComp greetHandler={this.greetParent}/>
//             </div>
//         )
//     }
// }

// export default ParentComp

