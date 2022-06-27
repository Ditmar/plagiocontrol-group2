import React from 'react'

export const LastDocument = () => {
    /* hecho */
    let principal = {
        boxSizing: 'border-box',
        position: 'absolute',
        left: '32px',
        right: '0px',
        top: '32px',
        bottom: '0px',
        background: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: '8px',
        /* mas codigo */
        width: '1122px',
        height: '336px',
        borderRadius: '8px',
    }
    let h1 = {
        height: '24px',
        left: '32px',
        right: '178px',
        top: '32px',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontSize: '19px',
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#252733',
        /* mas codigo */
        fontWeight: '700',
        size: '19px',
        lineHeight: '23.85px',
        paddingLeft: '32px',
        paddingTop: '15px',
    }
    let sub ={
        height: '16px',
        left: '32px',
        right: '178px',
        top: '64px',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.1px',
        /* mas codigo */
        width: '912px',
        fontWeight: '400',
        size: '12px',
        lineHeight: '16px',
        paddingLeft: '32px',
        marginBottom: '36px',
        color: '#9FA2B4',
    }
    let infor = {
        height: '20px',
        left: '32px',
        right: '136px',
        top: 'calc(50% - 20px/2 + 1px)',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#252733',
        /* mas codigo */
        width: '954px',
        paddingLeft: '32px',
    }
    let linkeo = {
        position: 'absolute',
        height: '20px',
        left: '0px',
        right: '105px',
        //top: calc(50% - 20px/2);
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: '0.2px',
    }
    let a = {
        textDecoration: 'none',
        color: '#3751FF',
    }
    let pagina = {
        position: 'absolute',
        width: '80px',
        height: '20px',
        right: '32px',
        //top: calc(50% - 20px/2 + 1px);
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: '0.2px',
        color: '#9FA2B4',
    }
    let hr = {
        position: 'absolute',
        height: '0px',
        left: '0px',
        right: '0px',
        //top: calc(50% - 0px/2);
        border: '1px solid #DFE0EB',
    }

  return (
    <div style={principal}>
        
        <div>
            <h1 style={h1}>Ultimos Documentos Publicados</h1>
            <div style={sub}>
                <span>Group: </span>
                <span><b>Support</b></span>
            </div>
    
            <table>
                <tbody >
                    <tr>
                      <td style={infor}>
                            Análisis de la investigación sobre la radio en Bolivia ...
                      </td>
                      <td style={linkeo}>
                        <a style={a} href=''>View details</a>
                      </td>
                        <td style={pagina}>321 Pag.</td>
                    </tr>
                    <tr>
                      <td>
                        <hr style={hr} />
                        <br></br>
                      </td>                
                    </tr>

                    <tr>
                      <td style={infor}>
                          Análisis bibliométrico y de redes sociales en tesis ...
                      </td>
                      <td style={linkeo}>
                        <a style={a} href=''>View details</a>
                      </td>
                      <td style={pagina}>120 Pag.</td>
                    </tr>

                    <tr>
                      <td>
                        <hr style={hr} />
                        <br></br>
                      </td>                
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}
