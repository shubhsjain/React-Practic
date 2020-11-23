import React from 'react'
// import Person from './Person'

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

// function NameList() {
//     const person =[
//         {
//         id : 1,
//         name :'Bruce',
//         age : 20,
//         skill : 'React'
//     },
//     {
//         id : 2,
//         name :'Clark',
//         age : 24,
//         skill : 'Angular'
//     },
//     {
//         id : 3,
//         name :'Diana',
//         age : 28,
//         skill : 'Vue'
//     },
//     ]
// const personList = person.map(person =>( 
// <Person key = {person.id} person={person}></Person> // the key prop shoud be unique in the property like id='1' in this the no. 1 shud not repeat itself in that property
//     ))
//     return (
//         <div>
//             {personList}
//         </div>
//     )
// }

// export default NameList

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    // const person =[
    //     {
    //     id : 1,
    //     name :'Bruce',
    //     age : 20,
    //     skill : 'React'
    // },
    // {
    //     id : 2,
    //     name :'Clark',
    //     age : 24,
    //     skill : 'Angular'
    // },
    // {
    //     id : 3,
    //     name :'Diana',
    //     age : 28,
    //     skill : 'Vue'
    // },
    // ]
const nameList = names.map((name, index) => <h2 key = {index}> {index} {name} </h2>) // but using index as a key will cost an ugly UI. certain conditions while using key.      (1) when the items in the list do not have unique id.     (2) the list is static and will not change.     (3) the list will never be reordered os filtered ONLY WHEN THESE CONDITIONS ARE SATISFIED THEN ONLY YOU CAN USE INDEX AS KEY
    return (
        <div>{nameList}</div>
    )
}

export default NameList
