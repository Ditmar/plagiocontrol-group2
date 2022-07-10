import   React, { useEffect, useState}  from "react";
import Button from '@material-ui/core/Button';
import { FaEdit , FaFilter , FaSortAmountUp ,  } from 'react-icons/fa';
import { BsThreeDotsVertical} from "react-icons/bs";
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
 import TablePagination from "./tablepagination"
 
 
 const data= [
  {id: 1, detalle1:'Contact Email not Linked',detalle2:'Updated 1 day ago',
  autor:'Tom Cruise',fecha:'on 24/05/2019',
  hora:'6:30 PM',descarga:'WNL'},
  {id: 2, detalle1:'Adding Images to Featured Posts',detalle2:'Updated 1 day ago',
  autor:'Matt Damon',fecha:'on 24/05/2019',
  hora:'9:00 AM',descarga:'LOW'},
  {id: 3, detalle1:'When will l be charged this month?',detalle2:'prueba',
  autor:'Robert Downey',fecha:'on 24/05/2019',
  hora:'5:00 PM',descarga:'HIGH'},
  {id: 4, detalle1:'Payment not going through',detalle2:'Updated 2 days ago',
  autor:'Christian Bale',fecha:'on 25/05/2019',
  hora:'5:00 PM',descarga:'NORMAL'},
  {id: 5, detalle1:'Unable to add replies',detalle2:'Updated 2 days ago',
  autor:'Henry Cavil',fecha:'on 24/05/2019',
  hora:'4:00 PM',descarga:'HIGH'},
  {id: 6, detalle1:'Downtime since last week',detalle2:'Updated 3 days ago',
  autor:'Chris Evans',fecha:'on 23/05/2019',
  hora:'2:00 PM',descarga:'NORMAL'},
  {id: 7, detalle1:'Referral Bonus',detalle2:'Updated 4 days ago',
  autor:'Sam Smith',fecha:'on 22/05/2019',
  hora:'11:30 AM',descarga:'LOW'},
  {id: 8, detalle1:'How do I change my password',detalle2:'Updated 6 days ago',
  autor:'Steve Rogers',fecha:'on 21/05/2019',
  hora:'1:00 PM',descarga:'NORMAL'},
]
export const Listar = ({}) => {
   
    return (
      <div className="Listar" >
      
        <TableContainer component={Paper} className="contenedor">
        <Table  aria-label="simple table" className="tabla">
          <TableHead >
          <TableCell><span className="titulo"> Lista</span></TableCell>
          <TableCell >
           
          </TableCell>
          <TableCell > </TableCell>
          <TableCell > &nbsp;&nbsp;&nbsp; <FaSortAmountUp/>Sort &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaFilter/> Filter </TableCell>
          
            <TableRow >
              <TableCell ><span className="cabecera">Detalle</span></TableCell>
              <TableCell ><span className="cabecera">Autor</span></TableCell>
              <TableCell ><span className="cabecera">Editar</span></TableCell>
              <TableCell ><span className="cabecera">Descargar</span></TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
          {data.map((row) => (
                <TableRow key={row.id}>      
                    <TableCell>
                    <Grid container>
                      <Grid item lg={1}>
                          <Avatar  src='https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg?w=2000'/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography ><span className="detalle">{row.detalle1}</span></Typography>
                          <Typography><span className="detalle2">{row.detalle2}</span></Typography>
                          
                      </Grid>
                  </Grid>
                    
                        
                        
                    </TableCell>
                    <TableCell>
                    <Grid item lg={10}>
                          <Typography><span className="name">{row.autor}</span></Typography>
                          <Typography ><span className="fecha">{row.fecha}</span></Typography>
                          
                        </Grid>
                    </TableCell>
                    
                    <TableCell>
                    <Grid item lg={10}>
                        <FiEdit className="editar"/>
                          <Typography><span className="tiempo">{row.hora}</span></Typography>
                          
                        </Grid>
                    </TableCell>
                    <TableCell className="caja">
                    
                    <Grid item lg={15}>
                    <Button ><span className="b4">{row.descarga}</span></Button>
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



   
