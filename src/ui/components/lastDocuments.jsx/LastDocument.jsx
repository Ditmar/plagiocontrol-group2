
import React from 'react'
import LastTableDocument from './LastTableDocument '

export const LastDocument = ({title='Ultimos documentos Publicados', group='Group: ', support='Support'}) => {
    const main = {
        boxSizing: 'border-box',
        position: 'absolute',
        left: '2rem',
        right: '0rem',
        top: '2rem',
        bottom: '0rem',
        background: '#FFFFFF',
        border: '0.063rem solid #DFE0EB',
        borderRadius: '0.5rem',
        width: '70.125rem',
        height: '21rem',
        borderRadius: '0.5rem',
    }
    
    const titleDocument = {
        height: '1.5rem',
        left: '2rem',
        right: '11.125rem',
        top: '2rem',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontSize: '1.188rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.025rem',
        color: '#252733',
        fontWeight: '700',
        size: '1.188rem',
        lineHeight: '1.491rem',
        paddingLeft: '2rem',
        paddingTop: '0.938rem',
    }
    const subtitle ={
        height: '1rem',
        left: '2rem',
        right: '11.125rem',
        top: '4rem',
        fontFamily: 'Mulish, Arial',
        fontStyle: 'normal',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        letterSpacing: '0.006rem',
        width: '57rem',
        fontWeight: '400',
        size: '0.75rem',
        lineHeight: '1rem',
        paddingLeft: '2rem',
        marginBottom: '2.25rem',
        color: '#9FA2B4',
    }
    
  return (
    <div style={main}>
        
        <div>
            <h1 style={titleDocument}>{title}</h1>
            <div style={subtitle}>
                <span>{group}</span>
                <span><b>{support}</b></span>
            </div>
    
            <table>
              <LastTableDocument listData={[
                  {id: 1, information:'Análisis de la investigación sobre la radio en Bolivia ...',
                  link:'View details',
                  pages:'321 Pag.'},
                  {id: 2, information:'Análisis bibliometrico y de redes sociales en tesis ...',
                  link:'View details',
                  pages:'120 Pag.'}
              ]}
              />
                
            </table>
        </div>
    </div>
  )
}
