import './styles.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableItem } from '../TableItem';


export const InfoTable = ({list}) => {
    return (
        <div className='container-infoTable'>
            <TableContainer sx={{backgrond: '#000', color: '#fff', borderRadius: 10}}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#fff' }} align="center">Data</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Categoria</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Título</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(financa => (
                            <TableItem 
                                key={financa.id}
                                categoria_id={financa.Categorium.descricao} 
                                data={financa.data} 
                                valor={financa.valor} 
                                titulo={financa.titulo} 
                            />
                        ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}






