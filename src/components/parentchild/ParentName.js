import React, { Component } from 'react'
import ChildName from './ChildName'

export default class ParentName extends Component {

    state ={
        firstName : 'Dian',
        lastName : 'Permana'
    }

    render() {
        return (
            <ChildName
                firstName={this.state.firstName}
                lastName={this.state.lastName}
            />
        )
    }
}
