import React from 'react'
import Person from './Person'

// function NameList() {
//     const names =['Bruce', 'Clark', 'Diana']
//     return (
//         <div>
//             {
//                 names.map(names => <h2>{names} is a hero</h2>)
//             }
//         </div>
//     )
// }

function NameList() {
    const person =[
        {
        id : 1,
        name :'Bruce',
        age : 20,
        skill : 'React'
    },
    {
        id : 2,
        name :'Clark',
        age : 24,
        skill : 'Angular'
    },
    {
        id : 3,
        name :'Diana',
        age : 28,
        skill : 'Vue'
    },
    ]
const personList = person.map(person =>( 
<Person person={person}></Person>
    ))
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
