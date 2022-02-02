import React, { Component } from 'react'

export default class ChildName extends Component {
    render() {
        return (
            <div>
                <h2>FirstName : {this.props.firstName}</h2>
                <h2>LastName : {this.props.lastName}</h2>
            </div>
        )
    }
}
