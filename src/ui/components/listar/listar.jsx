import   React, { useEffect, useState}  from "react";
import Button from '@material-ui/core/Button';
import { FaEdit , FaFilter , FaSortAmountUp ,  } from 'react-icons/fa';
import { BsThreeDotsVertical} from "react-icons/bs";
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
 
 

export const Listar = ({}) => {
   
    return (
      <div className="Listar" >
      
        <TableContainer component={Paper} >
        <Table  aria-label="simple table" className="tabla">
          <TableHead >
          <TableCell><span className="titulo"> Lista</span></TableCell>
          <TableCell >
           
          </TableCell>
          <TableCell > </TableCell>
          <TableCell > &nbsp;&nbsp;&nbsp; <FaSortAmountUp/>Sort  </TableCell>
          <TableCell > <FaFilter/> Filter</TableCell>
            <TableRow >
              <TableCell ><span className="cabecera">Detalle</span></TableCell>
              <TableCell ><span className="cabecera">Autor</span></TableCell>
              <TableCell ><span className="cabecera">Editar</span></TableCell>
              <TableCell ><span className="cabecera">Descargar</span></TableCell>
              <TableCell > </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg?w=2000'/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography ><span className="detalle">Contact Email not Linked</span></Typography>
                          <Typography><span className="detalle2">Updated 1 day ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                        <Grid item lg={10}>
                          <Typography><span className="name"> Tom Cruise</span></Typography>
                          <Typography ><span className="fecha">on 24.05.2019</span></Typography>
                          
                        </Grid>
                </TableCell>
              <TableCell>
                        <Grid item lg={10}>
                        <FaEdit className="editar"/>
                          <Typography><span className="tiempo">6:30 PM</span></Typography>
                          
                        </Grid>
              </TableCell>
              <TableCell  ><Button ><span className="b2">WNL</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                      
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=2000'/>
                      </Grid>
                      <Grid item lg={10}>
                      <Typography ><span className="detalle">Adding Images to Featured Posts</span></Typography>
                      <Typography><span className="detalle2">Updated 1 day ago</span></Typography>
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                        <Grid item lg={10}>
                        <Typography><span className="name"> Mat Damon</span></Typography>
                        <Typography ><span className="fecha">on 24.05.2019</span></Typography>
                          
                        </Grid>
                </TableCell>
                <TableCell>
                          <FaEdit className="editar"/>
                          <Typography><span className="tiempo">8:00 AM</span></Typography>
                </TableCell>
                <TableCell  ><Button ><span className="b3">LOW</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://www.treatwell.es/in-the-glow/wp-content/uploads/sites/10/2022/03/Hombres-Cara-Redonda-Treatwell.png'/>
                      </Grid>
                      <Grid item lg={10}>
                      <Typography ><span className="detalle">When will l be charged</span></Typography>
                      <Typography><span className="detalle2">Updated 2 days ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                    <Grid item lg={10}>
                        <Typography><span className="name"> Robert Downey</span></Typography>
                        <Typography ><span className="fecha">on 24.05.2019</span></Typography>
                          
                    </Grid>
                </TableCell>
                <TableCell>
                         <FaEdit className="editar"/>
                         <Typography><span className="tiempo">7:30 PM</span></Typography>
                </TableCell>
                <TableCell  ><Button ><span className="b2">HIGH</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://media.gq.com.mx/photos/5e1b8130264d86000848dd4c/master/w_1600%2Cc_limit/leonardo-dicaprio-salva-hombre.jpg'/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography ><span className="detalle">Payment not going through</span></Typography>
                          <Typography><span className="detalle2">Updated 2 days ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                    <Grid item lg={10}>
                    <Typography><span className="name"> Christian Bale</span></Typography>
                    <Typography ><span className="fecha">on 24.05.2019</span></Typography>
                          
                    </Grid>
                </TableCell>
                <TableCell>
                    <FaEdit className="editar"/>
                    <Typography><span className="tiempo">5:00 PM</span></Typography>
                </TableCell>
                <TableCell  ><Button ><span className="b4">NORMAL</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://static1.abc.es/Media/201503/30/hombre-mas-guapo--478x350.jpg'/>
                      </Grid>
                      <Grid item lg={10}>
                      <Typography ><span className="detalle">Unable to add replies</span></Typography>
                      <Typography><span className="detalle2">Updated 2 days ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                    <Grid item lg={10}>
                    <Typography><span className="name"> Henry Cavil</span></Typography>
                    <Typography ><span className="fecha">on 24.05.2019</span></Typography>
                          
                    </Grid>
                </TableCell>
                <TableCell>
                        <FaEdit className="editar"/>
                        <Typography><span className="tiempo">4:00 PM</span></Typography>
                </TableCell>
                <TableCell  ><Button ><span className="b2">HIGH</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2014/06/cuidados_basicos_de_la_piel_de_un_hombre.jpg.jpg'/>
                      </Grid>
                      <Grid item lg={10}>
                      <Typography ><span className="detalle">Downtime since last week</span></Typography>
                      <Typography><span className="detalle2">Updated 3 days ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                    <Grid item lg={10}>
                    <Typography><span className="name"> Chris Evans</span></Typography>
                    <Typography ><span className="fecha">on 23.05.2019</span></Typography>
                          
                    </Grid>
                </TableCell>
                <TableCell>
                        <FaEdit className="editar"/>
                        <Typography><span className="tiempo">2:00 PM</span></Typography>
                </TableCell>
                <TableCell  ><Button ><span className="b4">NORMAL</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://www.elsiglodedurango.com.mx/m/i/2021/06/986955.jpeg'/>
                      </Grid>
                      <Grid item lg={10}>
                      <Typography ><span className="detalle">Referral Bonus</span></Typography>
                      <Typography><span className="detalle2">Updated 4 days ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                    <Grid item lg={10}>
                    <Typography><span className="name"> Sam Smith</span></Typography>

                    <Typography ><span className="fecha">on 22.05.2019</span></Typography>
                          
                    </Grid>
                </TableCell>
                <TableCell>
                    <FaEdit className="editar"/>
                    <Typography><span className="tiempo">11:30 AM</span></Typography>
                </TableCell>
                <TableCell  ><Button ><span className="b3">LOW</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar  src='https://i.pinimg.com/736x/bd/78/dc/bd78dc808e1b0d0c639b0fb0c59da65a.jpg'/>
                      </Grid>
                      <Grid item lg={10}>
                      <Typography ><span className="detalle">How do I change my password</span></Typography>
                      <Typography><span className="detalle2">Updated 6 days ago</span></Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
                
              <TableCell>
                    <Grid item lg={10}>
                    <Typography><span className="name"> Steve Rogers</span></Typography>

                    <Typography ><span className="fecha">on 21.05.2019</span></Typography>
                          
                    </Grid>
                </TableCell>
              <TableCell>
                    <FaEdit className="editar"/>
                    <Typography><span className="tiempo">1:00 PM</span></Typography>
              </TableCell>
              <TableCell  ><Button ><span className="b4">NORMAL</span></Button>
              </TableCell>
              <TableCell>
                     <Grid item lg={10}>
                     <BsThreeDotsVertical/>
                          
                          
                        </Grid>
              </TableCell>
            </TableRow>
          
        </TableBody>
        <TableFooter className="paginacion">
        <TablePagination />
        </TableFooter>
        </Table>
      </TableContainer>
     
      
      
        
      </div>   
    );
}
