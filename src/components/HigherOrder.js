import React from 'react'

const UpdatedComp = OriginalComp => {
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="shubh " />;

        }
    }
    return NewComp;
}
export default UpdatedComp;