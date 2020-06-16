import React from 'react';
import styled from '@emotion/styled'
import {capitalize} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: white;
    margin-top: 1rem;
    h1{
        margin:0;
    }
`;

const Resumen = ({datos}) => {
    const {brand, year, plan} = datos

    return (
        <ContenedorResumen>
            <h1>Resumen de cotizacion</h1>
            <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Año: {year}</li>
            </ul>
        </ContenedorResumen>
    );
}
 
export default Resumen;