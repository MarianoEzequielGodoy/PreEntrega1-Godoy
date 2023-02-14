import React from 'react'
import './itemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='itemList'>
        {props.greeting}
    </div>
  )
}

export default ItemListContainer