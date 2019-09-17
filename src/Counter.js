import React from 'react'
import { connect } from 'react-redux'
const Counter = (props) => {
    return (
        <div>
            <p>Counter!</p>
            <p>Count {props.count}</p>
            <button onClick={props.onIncrementClick}>increment!</button>
            <button onClick={props.onDecrementClick}>increment!</button>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        count: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action)
        },
        onDecrementClick: () => {
            const action = { type: 'DECREMENT' };
            dispatch(action)
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter);

