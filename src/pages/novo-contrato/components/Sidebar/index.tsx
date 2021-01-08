
//REACT
import React from 'react'
//INTERFACES
import { INovoContratoSidebar } from '../../../../types'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const StyledSidebar = loadable(() => import('../../../../components/StyledComponents/StyledSidebar'))
const SidebarDadosGerais = loadable(() => import('./components/SidebarDadosGerais'))

const Sidebar = ({ refDadosGerais }: INovoContratoSidebar) => {

  return (
    <StyledSidebar>
      <SidebarDadosGerais refDadosGerais={refDadosGerais} />
      <p>Dados Internos</p>
      <p>SECTION</p>
      <p>SECTION</p>
      <p>SECTION</p>
      <p>SECTION</p>
    </StyledSidebar>
  )
}



export default Sidebar