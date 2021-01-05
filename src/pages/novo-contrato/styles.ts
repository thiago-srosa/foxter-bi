//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
//STYLED-COMPONENTS
import styled from 'styled-components'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > *': {
      width: '100%',
      marginTop: 15,
    },
  },
}));

export const H2 = styled.h2`
  padding: 10px 0 10px 10px;
  margin: 0px;
  flex-grow: 1;
`