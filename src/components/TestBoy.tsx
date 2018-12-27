import React from 'react';
import ReactDOM from 'react-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const materials = [
  { qty: '1', desc: '312', price: '332323' },
  { qty: '2', desc: '3123', price: '3213' },
  { qty: '3', desc: '3232', price: '21312' },
  { qty: '4', desc: '3232', price: '3123' },
  { qty: '5', desc: '123', price: '22132' },
  { qty: '6', desc: '33221', price: '333' },
  { qty: '7', desc: '323', price: '3232' },
  { qty: '9', desc: '12312', price: '33232' }
]

interface ITestBoyState {
  materials: materials;
}

class TestBoy extends React.Component<{}, ITestBoyState> {
  constructor(props) {
    super(props)
    this.state = {
      materials: ['testitem'],
    }
    console.log("Materials at constructor:", this.materials)
  }

  handleChange(index, dataType, value) {
    const newState = this.state.materials.map((item, i) => {
      if (i == index) {
        return {...item, [dataType]: value};
      }
      return item;
    });

    this.setState({
       materials: newState
    });
  }

  public render() {
    console.log(JSON.stringify(this.state.materials));
    return (
      <Paper>
        <h1>TestBoy</h1>
        <Table className="table table-bordered">
            <TableHead>
              <TableRow>
                <TableCell>
                  Qty
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {this.state.materials.map((row, index) => {
                        (<TableRow>
                            <TableCell>
                              <input onChange={(e) => this.handleChange(index, 'qty', e.target.value)}
                                     type='number'
                                     className='form-control'
                                     step='1' min="1"
                                     value={this.state.materials[index].qty}/>
                            </TableCell>
                            <TableCell>
                              <input onChange={(e) => this.handleChange(index, 'desc', e.target.value)}
                                     type='text'
                                     className='form-control'
                                     value={this.state.materials[index].desc}/>
                            </TableCell>
                            <TableCell>
                              <input onChange={(e) => this.handleChange(index, 'price', e.target.value)}
                                     type='text'
                                     className='form-control'
                                     placeholder='6.00'
                                     value={this.state.materials[index].price}/>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default TestBoy;
