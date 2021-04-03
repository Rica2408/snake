import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  board: {
    display: 'grid',
    width: 200,
    height: 200,
    color: 'blue',
    gridTemplateColumns: 'repeat(10, 20px)',
    gridTemplateRows: 'repeat(10, 20px)',
    border: '1px solid #000',
    background: 'red',
  }
}))