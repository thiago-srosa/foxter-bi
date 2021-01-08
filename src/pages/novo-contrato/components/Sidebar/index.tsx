
//REACT
import React from 'react'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const StyledSidebar = loadable(() => import('../../../../components/StyledComponents/StyledSidebar'))
const RadioButtonUncheckedIcon = loadable(() => import('@material-ui/icons/RadioButtonUnchecked'))

const Sidebar = (props) => {

  function teste() {
    props.refDadosGerais.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",      
    })
  }
  return (
    <StyledSidebar>
      <div style={{ display: 'flex' }} onClick={teste}><RadioButtonUncheckedIcon fontSize='small' color='action' />Dados gerais</div>
      <p>Dados Internos</p>      
      <p>SECTION</p>
      <p>SECTION</p>
      <p>SECTION</p>
      <p>SECTION</p>
    </StyledSidebar>
  )
}



export default Sidebar