import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm({addThought}) {
  const [ text, setText ] = useState('')

  function handleChange({target}) {
    setText(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }
    
    if (text.length) {
      addThought(thought)
    }
    
    setText('')
  }

  return (
    <form 
      className="AddThoughtForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
