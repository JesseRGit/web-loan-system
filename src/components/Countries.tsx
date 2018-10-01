import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import countries from '../countries';

import ButtonAppBar from './ButtonAppBar';

interface ICountriesState {
}


class Countries extends React.Component<{}, ICountriesState> {
  public render() {
    return (
        <Paper>
          <div>
            <ButtonAppBar />
          </div>
          <h1>Countries_3a</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Population
                </TableCell>
                <TableCell>
                  Percentage
                </TableCell>
                <TableCell>
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map(country =>
                (<TableRow>
                  <TableCell>
                    {country.name}
                  </TableCell>
                  <TableCell>
                    {country.population}
                  </TableCell>
                  <TableCell>
                    {country.percentage}
                  </TableCell>
                  <TableCell>
                    {country.position}
                  </TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default Countries;
