import React from 'react';
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

//styled components
const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    position: relative;
`;
const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return (
        (!cotizacion)
        ? <Mensaje>Elige marca, plan y año</Mensaje> 
        :
            (
            <ResultadoCotizacion>
                <TransitionGroup component='div' className='resultado'>
                    <CSSTransition classNames='resultado' key={cotizacion} timeout={{ enter:500, exit:500 }}>
                        <TextoCotizacion>El total es de: ${cotizacion}</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>

            </ResultadoCotizacion>
            )
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;