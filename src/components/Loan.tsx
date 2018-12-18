import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface ILoanProp {
  prop1?: {
    id: string;
    equipmentId: string;
    userId: string;
    begins: string;
    ends: string;
    returned: string;
  };
}

const Loan: React.SFC<ILoanProp> = ({ prop1 }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.id}
            </TableCell>
            <TableCell>
              {prop1.equipmentId}
            </TableCell>
            <TableCell>
              {prop1.userId}
            </TableCell>
            <TableCell>
              {prop1.begins}
            </TableCell>
            <TableCell>
              {prop1.ends}
            </TableCell>
            <TableCell>
              {prop1.returned}
            </TableCell>
        </TableRow>
  )
}

Loan.defaultProps = {
  prop1: {
    id: '',
    equipmentId: '',
    userId: '',
    begins: '',
    ends: '',
    returned: '',
  },
}


export default Loan;
