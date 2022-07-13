import   React, { useEffect, useState}  from "react";
import Button from '@material-ui/core/Button';
import { FaEdit , FaFilter , FaSortAmountUp ,  } from 'react-icons/fa';
import { BsSearch, BsThreeDotsVertical} from "react-icons/bs";
import { FiEdit  } from 'react-icons/fi';

import '../../../listar.css';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
     TableFooter,
    TextField
 } from '@material-ui/core';

 import TablePagination from "./tablepagination";
 import data from "./Datos.json";
 




export const Listar = ({}) => {
const [info,setInfo]=useState(data); 
const [order,setOrder]= useState("ASC")
const sorting= (col)=> {
if (order==="ASC") {
const sorted = [...info].sort((a,b)=>
a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
);
setInfo(sorted);
setOrder("DSC");
}
if (order==="DSC") {
const sorted=[...info].sort((a,b)=>
a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
);
setInfo(sorted);
setOrder("ASC");
} 
};
const [query,setQuery]=useState("");   
return (
  
  
  <div className="Listar" >
    
    <TableContainer component={Paper} className="contenedor">
    <Table  aria-label="simple table" className="tabla">
      <TableHead >
      <TableCell><span className="titulo"> Lista</span></TableCell>
      <TableCell >
       
      </TableCell>
      <TableCell > <input type="text" placeholder="Filter for autor" onChange={(e) => setQuery(e.target.value)}/> </TableCell>
      <TableCell > &nbsp;&nbsp;&nbsp; <FaSortAmountUp/><span onClick={()=>sorting("autor")}>Sort</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaFilter/> Filter </TableCell>
      
        <TableRow >
          <TableCell ><span className="cabecera">Detalle</span></TableCell>
          <TableCell ><span className="cabecera" >Autor</span></TableCell>
          <TableCell ><span className="cabecera">Editar</span></TableCell>
          <TableCell ><span className="cabecera">Descargar</span></TableCell>
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
                      <Typography ><span className="detalle">{info.detalle1}</span></Typography>
                      <Typography><span className="detalle2">{info.detalle2}</span></Typography>
                      
                  </Grid>
              </Grid>
               </TableCell>
                <TableCell>
                <Grid item lg={10}>
                      <Typography><span className="name">{info.autor}</span></Typography>
                      <Typography ><span className="fecha">{info.fecha}</span></Typography>
                      
                    </Grid>
                </TableCell>
                
                <TableCell>
                <Grid item lg={10}>
                    <FiEdit className="editar"/>
                      <Typography><span className="tiempo">{info.hora}</span></Typography>
                      
                    </Grid>
                </TableCell>
                
                <TableCell className="caja">
                
                <Grid item lg={15}>
                <Button >
                  
                  <span className="b4">  {info.descarga}</span></Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <BsThreeDotsVertical/>
                       
                       
                     </Grid>  
                    
                </TableCell>
                
               
            </TableRow> 
              
       ) )}
        
    </TableBody>
    <TableFooter className="paginacion">
    <TablePagination />
    </TableFooter>
    </Table>
  </TableContainer>
  
  
  
    
  </div>  
 
);
}
