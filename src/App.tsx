import React, { FC } from 'react';
import Board from './components/Board/Board';
import { useStyles } from './App.styles';

const App: FC = () => {
  const classes =  useStyles()

  return (
    <div className={classes.container}>
      <Board/>
    </div>
  );
}

export default App;
