import React from 'react'

const CardUser = ({ userData }) => {
  return (
    <div>
      <h1>{userData.login}</h1>
      <h2>{userData.id}</h2>
    </div>
  )
}

export default CardUser;