import React from 'react'

const Message = ({ name, favoriteVideogame}) => {
  return (
    <>
    <h4>¡Muchas gracias, {name}!</h4>
    <h4>También me gusta {favoriteVideogame}, pero mi favorito es Final Fantasy IX</h4>
    </>
  )
}

export default Message