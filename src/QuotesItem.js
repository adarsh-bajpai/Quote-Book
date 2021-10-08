import React from 'react'

const QuotesItem = (props) =>{
    const { id, name, body } = props
    return (
        <div>
            <b>{body}</b>
            <b>{name}</b>
            <b>{id}</b>
        </div>
    )
}

export default QuotesItem