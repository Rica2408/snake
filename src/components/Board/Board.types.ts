import { Dispatch, SetStateAction } from "react"

export type PositionType = 'up' | 'down' | 'left' | 'rigth'

export type BoardType = {
  setScore: Dispatch<SetStateAction<number>>
  setGameOver: Dispatch<SetStateAction<boolean>>
  gameOver: boolean
}