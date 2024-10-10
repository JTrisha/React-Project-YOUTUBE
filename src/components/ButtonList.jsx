import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Entertainment"/>
        <Button name="Movies"/>
        <Button name="Music"/>
        <Button name="Romance"/>
        <Button name="Action"/>
        <Button name="Comedy"/>
        <Button name="Reality"/>
        <Button name="Cooking"/>
        <Button name="Dance"/>
        <Button name="Talent"/>
    </div>
  )
}

export default ButtonList