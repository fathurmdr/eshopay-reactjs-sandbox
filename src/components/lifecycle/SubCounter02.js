import React, { Component } from 'react'

export default class SubCounter02 extends Component {
    componentWillUnmount() {
        console.log("Component SubCounter2 will be removed");
    }
    render() {
        return (
            <div>
                <p>SubCounter02 Ganjil : {this.props.counter}</p>
            </div>
        )
    }
}
