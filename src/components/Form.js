import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             coments : '',
             topic : ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username : event.target.value
        })
    }

    handleComentsChange = event => {
        this.setState({
            coments : event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.coments} ${this.state.topic}`)
        event.preventDefault()      //this will prevent the data typed before otherwise the data will be loss 
    }
    
    render() {
        const{username, coments, topic} = this.state  // because of this we can use value={topic} insted of value={this.state.topic}
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type='text' value = {username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Coments: </label>
                    <textarea type="text" value= {coments} onChange={this.handleComentsChange}></textarea>
                </div>
                <div>
                    <label>topic: </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button value ="submit">Submit</button>
            </form>
        )
    }
}

export default Form
