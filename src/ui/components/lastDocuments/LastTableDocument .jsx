import React from 'react'

const LastTableDocument  = ({listData}) => {
    
    const information = {
        height: '1.25rem',
        left: '2rem',
        right: '8.5rem',
        top: 'calc(50% - 1.25rem/2 + 0.063rem)',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.013rem',
        color: '#252733',
        width: '59.625rem',
        paddingLeft: '2rem',
    }
    const link = {
        position: 'absolute',
        height: '1.25rem',
        left: '0rem',
        right: '6.563rem',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        textAlign: 'right',
        letterSpacing: '0.013rem',
    }
    const a = {
        textDecoration: 'none',
        color: '#3751FF',
    }
    const numberPage = {
        position: 'absolute',
        width: '5rem',
        height: '1.25rem',
        right: '2rem',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        textAlign: 'right',
        letterSpacing: '0.013rem',
        color: '#9FA2B4',
    }
    const hr = {
        position: 'absolute',
        height: '0rem',
        left: '0rem',
        right: '0rem',
        border: '0.063rem solid #DFE0EB',
    }
    const table = {
        paddingTop: '10px',
    }
  return (
        <tbody >
            {listData.map(item => 
                <tr key={item.id} style={table}>          
                    <td style={information}>
                        <br></br>
                        {item.information}
                    </td>
                    <td style={link}>
                        <br></br>
                        <a style={a} href='{item.url}'>{item.link}</a> 
                    </td>
                    
                    <td style={numberPage}>
                        <br></br>
                        {item.pages}
                    </td>

                    <td>
                    <br></br><br></br>
                        <hr style={hr} />
                    </td> 
                </tr> 
            )}
        </tbody>
  )
}

export default LastTableDocument;