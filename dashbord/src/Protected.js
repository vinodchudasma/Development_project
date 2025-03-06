import React from 'react'
import Header from './Header'

const Protected = ({ children }) => {
 return (
  <Header>
   {
    children
   }
  </Header>
 )
}

export default Protected
