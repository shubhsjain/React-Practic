import React from 'react'
import './myStyles.css'
import styles from './appStyles.module.css' 

// const heading = {
//     fontsize: '72px',
//     color: 'blue'
// }

function Stylesheet(props) {
    // let className = props.primary ? 'primary' : ''
    return (
        <div>
            {/* <h1 className={`${className} font-xl`}>Stylesheets</h1> */}
            

            {/* <h2 style={{color: "blue"}}>shubh</h2> */}

                {/* inline css  */}

            {/* <h1 style={heading}>inline</h1> */}

            {/* module.css */}

            <h1 className = {styles.success}>SHUBHYA</h1>

        </div>
    )
}

export default Stylesheet