// USING JSX

//   USING CONST

/**  import React from 'react'

const Hello = () => {
    return (
        <div className = 'dummyClass'>
            <h1> Hello Shubham</h1>
        </div>
    )
    
}
export default Hello */


//              USING DEFAULT (REC)


/**  import React, { Component } from 'react'

export class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello Shubhamzz</h1>          
            </div>
        )
    }
}

export default Hello */


//                    USING JS ONLY


import React from 'react'

const Hello = () => {
    return React.createElement(
        'div',
        {id: "Hello" , className: "dummyClass"},  // <= this is attribute it can be null or we can put a class or id..
        React.createElement(
            'h1', null , 'Hello Shubhamsss'
        )    
    )
}

export default Hello