import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface ICountryProp {
  prop1?: {
    name: string;
    population: string;
    percentage: string;
    position: string;
  };
}

const Country: React.SFC<ICountryProp> = ({ prop1 }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.name}
            </TableCell>
            <TableCell>
              {prop1.population}
            </TableCell>
            <TableCell>
              {prop1.percentage}
            </TableCell>
            <TableCell>
              {prop1.position}
            </TableCell>
        </TableRow>
  )
}

Country.defaultProps = {
  prop1: {
    name: '',
    population: '',
    percentage: '',
    position: '',
  },
}


export default Country;
