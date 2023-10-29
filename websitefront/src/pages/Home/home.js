import React from 'react'

export default function home(props) {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>{props.Children}</h1>
    </div>
  )
}
