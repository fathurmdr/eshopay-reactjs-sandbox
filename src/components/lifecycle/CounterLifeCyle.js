import React, { Component } from 'react'
import SubCounter01 from './SubCounter01';
import SubCounter02 from './SubCounter02';

export default class CounterLifeCycle extends Component {
    state = {
        counter: 5
    }

    componentDidMount() {
        const { counter } = this.state;
        console.log(`Current Counter didMount : ${counter}`);
    }

    componentDidUpdate() {
        const { counter } = this.state;
        console.log(`Current Counter didUpdate : ${counter}`);
    }

    increment = () => {
        this.setState({counter : this.state.counter+5})
    }

    decrement = () => {
        this.setState({counter : this.state.counter-5})
    }


    render() {
        const { counter } = this.state;
        let component = counter % 2 === 0 ? <SubCounter01 counter={counter}/> : <SubCounter02 counter={counter}/>
        return (
            <>
                <h3>Counter LifeCycle : {counter}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                {component}
            
            </>
        );
    }
}
