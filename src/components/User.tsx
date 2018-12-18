import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface IUserProp {
  prop1?: {
    id: string;
    name: string;
    email: string;
  };
}

const User: React.SFC<IUserProp> = ({ prop1 }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.id}
            </TableCell>
            <TableCell>
              {prop1.name}
            </TableCell>
            <TableCell>
              {prop1.email}
            </TableCell>
        </TableRow>
  )
}

User.defaultProps = {
  prop1: {
    id: '',
    name: '',
    email: '',
  },
}


export default User;
