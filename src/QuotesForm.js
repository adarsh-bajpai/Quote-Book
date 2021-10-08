import React, { useState } from 'react'
import {v4 as uuidv4 } from 'uuid'

const QuotesForm = (props) => {
  const { addItem } = props
  const [name, setName] = useState()
  const [body, setBody] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      id: uuidv4(),
      name: name,
      body: body
    }
    addItem(formData)

    setName('')
    setBody('')
  }

  const handleNameChange = (e) => {
   const nameValue = e.target.value
   setName(nameValue)
  }

  const handleBodyChange = (e) =>{
    const bodyValue = e.target.value
    setBody(bodyValue)
  }
  

  return (
    <div>
      <h3>Add Quotes</h3>
      <form onSubmit={handleSubmit}>
        <label>Name </label><br/>
        <input type='text' value={name} onChange={handleNameChange} /><br/>
        <label>Body</label><br/>
        <textarea type='text' value={body} onChange={handleBodyChange}/><br/>
        <input type='submit' value='save'/>
      </form>
    </div>
  )
}

export default QuotesForm