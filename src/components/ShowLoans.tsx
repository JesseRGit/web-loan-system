import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import loans from '../loans';
import Loan from './Loan';

class ShowLoans extends React.Component<{}, ILoansState> {
  public render() {
    return (
        <Paper>
          <h1>Loans</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Id
                </TableCell>
                <TableCell>
                  EquipmentId
                </TableCell>
                <TableCell>
                  UserId
                </TableCell>
                <TableCell>
                  Begins
                </TableCell>
                <TableCell>
                  Ends
                </TableCell>
                <TableCell>
                  Returned
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loans.map(loan => <Loan prop1={loan} />)}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default ShowLoans;
