//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
//STYLED-COMPONENTS
import styled from 'styled-components'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '47%',
      margin: 8,
    },
  },
}));

export const H2 = styled.h2`
  padding: 10px 0 10px 10px;
  margin: 0px;
  flex-grow: 1;
`