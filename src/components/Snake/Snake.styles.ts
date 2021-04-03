import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  snake: {
    width: 20,
    height: 20,
    background: 'green',
    gridArea: ({x, y}: Record<string, number>): string => `${y}/${x}`
  }
}))