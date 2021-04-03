import React, { FC } from 'react'
import { useStyles } from './Food.styles'
import { FoodProps } from './Food.types'

const Food: FC<FoodProps> = ({x, y}) => {
  const classes = useStyles({x, y})
  return (
    <div className={classes.food} />
  )
}

export default Food

