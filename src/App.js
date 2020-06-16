import React, {useState} from 'react';
import styled from '@emotion/styled'

//Components
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: white;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({})
  
  const {datos, cotizacion} = resumen

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros"/>

      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        {datos && <Resumen datos={datos} />}
        <Resultado cotizacion={cotizacion} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
