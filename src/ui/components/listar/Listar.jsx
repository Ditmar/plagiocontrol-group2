import   React, { useEffect, useState}  from 'react';
import Button from '@material-ui/core/Button';
import { FaFilter , FaSortAmountUp  } from 'react-icons/fa';
import { BsThreeDotsVertical} from 'react-icons/bs';
import { FiEdit  } from 'react-icons/fi';
import '../../../listar.css';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography,TableFooter,} from '@material-ui/core';
import TablePagination from './tablepagination';
import data from './data.json';
 
 export const Listar = ({}) => {
  const [info,setInfo]=useState(data); 
  const [order,setOrder]= useState("ASC")
  const sorting= (col)=> {
  if (order==="ASC") {
  const sorted = [...info].sort((first,last)=>
  first[col].toLowerCase() > last[col].toLowerCase() ? 1 : -1
  );
  setInfo(sorted);
  setOrder("DSC");
  }
  if (order==="DSC") {
  const sorted=[...info].sort((first,last)=>
  first[col].toLowerCase() < last[col].toLowerCase() ? 1 : -1
  );
  setInfo(sorted);
  setOrder("ASC");
  } 
  };
  const [query,setQuery]=useState("");   
  return (
  <div className="List" >
  <TableContainer component={Paper} className="container">
    <Table  aria-label="simple table" className="table">
      <TableHead >
      <TableCell><span className="title"> Lista</span></TableCell>
      <TableCell >
      </TableCell>
      <TableCell > <input type="text" placeholder="Filter for autor" onChange={(e) => setQuery(e.target.value)}/> </TableCell>
      <TableCell > &nbsp;&nbsp;&nbsp; <FaSortAmountUp/><span onClick={()=>sorting("autor")}>Sort</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaFilter/> Filter </TableCell>
        <TableRow >
          <TableCell ><span className="header">Detalle</span></TableCell>
          <TableCell ><span className="header" >Autor</span></TableCell>
          <TableCell ><span className="header">Editar</span></TableCell>
          <TableCell ><span className="header">Descargar</span></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {info.filter((info)=>info.autor.toLowerCase().includes(query)).map((info) => (
          <TableRow key={info.id}>      
              <TableCell>
                <Grid container>
                  <Grid item lg={1}>
                      <Avatar  src='https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg?w=2000'/>
                  </Grid>
                  <Grid item lg={10}>
                      <Typography ><span className="detail1">{info.detalle1}</span></Typography>
                      <Typography><span className="detail2">{info.detalle2}</span></Typography>
                  </Grid>
                </Grid>
              </TableCell>
                <TableCell>
                  <Grid item lg={10}>
                      <Typography><span className="name">{info.autor}</span></Typography>
                      <Typography ><span className="date">{info.fecha}</span></Typography>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid item lg={10}>
                    <FiEdit className="edit"/>
                      <Typography><span className="time">{info.hora}</span></Typography>
                  </Grid>
                </TableCell>
                <TableCell className="box">
                  <Grid item lg={15}>
                    <Button ><span className="b4">  {info.descarga}</span></Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <BsThreeDotsVertical/>
                  </Grid>  
                </TableCell>
          </TableRow> 
       ))}
      </TableBody>
      <TableFooter className="pagination">
        <TablePagination />
      </TableFooter>
    </Table>
  </TableContainer>
  </div>  
);
}
