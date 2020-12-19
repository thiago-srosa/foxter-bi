import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  column: {
    width: '200px',
    textAlign: 'right',
  }
});

function Row(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell style={{ width: '2rem' }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {'teste'}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Dados do cliente
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'CPF:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'RG:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Email:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Telefone:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Profissão:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Estado civil:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Regime de bens:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Endereço:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Bairro:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Cidade:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'CEP:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell className={classes.column} component="th" scope="row">
                      {'Observações:'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {'teste'}
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          <Row />
        </TableBody>
      </Table>
    </TableContainer>
  );
}