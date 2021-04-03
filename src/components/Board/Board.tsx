import { FC, useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './Board.styles'
import Snake from '../Snake'
import { SnakeProps } from '../Snake/Snake.types'
import { clone, equals, uniq } from 'ramda'
import { BoardType, PositionType } from './Board.types'
import Food from '../Food'

const Board: FC<BoardType> = ({setScore, setGameOver, gameOver}) => {
  const classes = useStyles()
  const [snake, setSnake] = useState<SnakeProps[]>([{x: 3, y: 5}])
  const [position, setPosition] = useState<PositionType>('up')
  const [food, setFood] = useState<SnakeProps>({x: Math.floor(Math.random() * 10 + 1), y: Math.floor(Math.random() * 10 + 1)})

	useEffect(() => {
		const controls = (e: KeyboardEvent) => {
			switch(e.key) {
				case 'ArrowRight':
					setPosition('rigth')
          setGameOver(false)
					break
				case 'ArrowUp':
					setPosition('up')
          setGameOver(false)
					break
				case 'ArrowLeft':
					setPosition('left')
          setGameOver(false)
					break
				case 'ArrowDown':
					setPosition('down')
          setGameOver(false)
					break
				default:
					break
			}
		}
		window.addEventListener('keydown', controls)
		return () => window.removeEventListener('keydown', controls)
	}, [setGameOver])

  const eat = async (): Promise<boolean> => {
    if (equals(food, snake[0])) {
      setSnake(value => {
        const aux = clone(value)
        aux.push(food)
        setFood({x: Math.floor(Math.random() * 10 + 1), y: Math.floor(Math.random() * 10 + 1)})

        return aux
      })

      return true
    }
    return false
  }

  const crash = async(hasEat: boolean): Promise<void> => {
    if (snake[0].x > 10 || snake[0].x <= 0 || snake[0].y > 10 || snake[0].y <= 0) {
      setGameOver(true)
    }
    if (!hasEat) {
      const numberOfItems = uniq(snake)
      if (!equals(numberOfItems, snake)) {
        setGameOver(true)
      }
    }
  }
  const move = async () => {
    switch(position) {
      case 'down':
        setSnake(value => {
          const aux = clone(value)
          const add = clone(aux[0])
          add.y = add.y + 1
          if (add.y < 11) {
            aux.pop()
            aux.unshift(add)
          } else {
            setGameOver(true)
          }
          return aux
        })
        break
      case 'up':
        setSnake(value => {
          const aux = clone(value)
          const add = clone(aux[0])
          add.y = add.y - 1
          if (add.y > 0) {
            aux.pop()
            aux.unshift(add)
          } else {
            setGameOver(true)
          }
          return aux
        })
        break
      case 'left':
        setSnake(value => {
          const aux = clone(value)
          const add = clone(aux[0])
          add.x = add.x - 1
          if (add.x > 0) {
            aux.pop()
            aux.unshift(add)
          } else {
            setGameOver(true)
          }
          return aux
        })
        break
      case 'rigth':
        setSnake(value => {
          const aux = clone(value)
          const add = clone(aux[0])
          add.x = add.x + 1
          if (add.x < 11) {
            aux.pop()
            aux.unshift(add)
          } else {
            setGameOver(true)
          }
          return aux
        })
        break

    }
  }

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(async () => {
        const hasEat = await eat()
        await crash(hasEat)
        await move()
      }, 200)

      return () => clearInterval(interval)
    }
  })

  useEffect(() => {
    setScore(snake.length)
  }, [setScore, snake])

	return (
		<div>
			<Box className={classes.board}>
        <>
          <Food x={food.x} y={food.y} />
          {snake.map((dot, index) => (
            <Snake key={index} x={dot.x} y={dot.y} />
          ))}
        </>
			</Box>
		</div>
  )
}

export default Board