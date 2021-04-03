import React, { FC } from 'react'
import { useStyles } from './Snake.styles'
import { SnakeProps } from './Snake.types'

const Snake: FC<SnakeProps> = ({x, y}) => {
  const classes = useStyles({x, y})
  return (
    <div className={classes.snake} />
  )
}

export default Snake

