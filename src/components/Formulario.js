import React, {useState} from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper'

//styled components
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const Radio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover{
        background-color: #26c6da;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [error, guardarError] = useState(false)

    const [datos, guardarDatos] = useState({
        brand:'',
        year:'',
        plan:''
    })
    const {brand, year, plan} = datos

    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const enviaDatos = e => {
        e.preventDefault()
        
        if( brand.trim()==="" || year.trim()==="" || plan.trim()==="" ){
            guardarError(true)
        }else{
            guardarError(false)

            let resultado = 2000

            //obtener diferencia de años
            const diferencia = obtenerDiferenciaYear(year)

            //por cada año hay que restar el 3%
            resultado -= ( (diferencia*3) * resultado ) /100

            //chevrolet 15%
            //honda 5%
            //mercedes 30%
            resultado = calcularMarca(brand) * resultado

            //aumento plan: basico 20%, completo 50%
            const incremento = obtenerPlan(plan)
            resultado = parseFloat( incremento * resultado ).toFixed(2)

            //guardar resultado
            guardarCargando(true)

            setTimeout(() => {
                guardarCargando(false)

                guardarResumen({
                    cotizacion: Number(resultado),
                    datos
                })
            }, 3000);
        }
    }

    return (
        <form onSubmit={enviaDatos}>
            { error && <Error>Todos los campos son obligatorios</Error> }
            <Campo>
                <Label>Marca</Label>
                <Select name='brand' value={brand} onChange={obtenerInformacion}>
                    <option value=''>Selecciona</option>
                    <option value='chevrolet'>Chevrolet</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='honda'>Honda</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select name='year' value={year} onChange={obtenerInformacion}>
                    <option value="">Selecciona</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <Radio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan==='basico'}
                    onChange={obtenerInformacion}
                />Basico
                <Radio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan==='completo'}
                    onChange={obtenerInformacion}
                />Completo
            </Campo>

            <Boton type='submit'>Cotizar</Boton>
        </form>
    );
}
 
Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}

export default Formulario;