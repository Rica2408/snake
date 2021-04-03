import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  food: {
    width: 20,
    height: 20,
    background: 'black',
    gridArea: ({x, y}: Record<string, number>): string => `${y}/${x}`
  }
}))