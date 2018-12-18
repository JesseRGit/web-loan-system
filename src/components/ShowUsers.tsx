import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import users from '../users';
import User from './User';

class ShowUsers extends React.Component<{}, IUsersState> {
  public render() {
    return (
        <Paper>
          <h1>Users</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Id
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => <User prop1={user} />)}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default ShowUsers;
