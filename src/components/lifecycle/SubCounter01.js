import React, { Component } from 'react'

export default class SubCounter01 extends Component {
    componentWillUnmount() {
        console.log("Component SubCounter01 will be removed");
    }


    render() {
        return (
            <div>
                <p>SubCounter01 Genap : {this.props.counter}</p>
            </div>
        )
    }
}
