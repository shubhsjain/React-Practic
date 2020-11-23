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
<Person key = {person.id} person={person}></Person> // the key prop shoud be unique in the property like id='1' in this the no. 1 shud not repeat itself in that property
    ))
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
