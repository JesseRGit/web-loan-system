import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface IEquipmentProp {
  prop1?: {
    id: string;
    name: string;
    description: string;
  };
}

const Equipment: React.SFC<IEquipmentProp> = ({ prop1 }) => {
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
              {prop1.description}
            </TableCell>
        </TableRow>
  )
}

Equipment.defaultProps = {
  prop1: {
    id: '',
    name: '',
    description: '',
  },
}


export default Equipment;
