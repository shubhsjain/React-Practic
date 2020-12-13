import React from 'react'

const UserContext = React.createContext('shubh') 
// THIS IS (SHUBH) IS DEFAULT WHEN YOU DID NOT PUT THE VALUE IN APP.JS AND DONT NEED TO STATE THE COMPONENT

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext