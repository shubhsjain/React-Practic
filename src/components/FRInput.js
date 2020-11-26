import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="text"></input>
//         </div>
//     )
// }
const FRInput = React.forwardRef( (props, ref) => {      //in this the whole function is used as parameter

    return (
        <div>
            <input type = "text" ref = {ref}/>
        </div>
)
} )

export default FRInput
