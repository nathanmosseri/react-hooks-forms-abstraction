import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    admin: false
  })

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    
  }
  
  const display = formData.admin ? <h1>{formData.firstName} {formData.lastName} has chosen to be displayed</h1> : null
    
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type='checkbox' name= 'admin' onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
    {display}
    </div>
  );
}

export default Form;
