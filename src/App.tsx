import React, { FC, useState } from 'react'
import Board from './components/Board/Board'
import { useStyles } from './App.styles'
import { Box } from '@material-ui/core'

const App: FC = () => {
  const classes =  useStyles()
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  return (
    <div className={classes.container}>
      <h1>Snake</h1>
      <Box>
        Score: {score}
      </Box>
      <Board setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} />
      {gameOver ?
        <h1>
          Game over
        </h1> : null
      }
    </div>
  );
}

export default App;
