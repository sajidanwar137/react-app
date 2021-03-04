import React, {useState} from 'react'
import axios from 'axios'

export default function Body() {
  const [title, setTitle] = useState<any>();
  axios.get('/about').then(res => {
    setTitle(res.data)
  })
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
