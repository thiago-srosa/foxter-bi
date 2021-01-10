
//REACT
import React from 'react'
//INTERFACES
import { INovoContratoSidebar } from '../../../../types'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const StyledSidebar = loadable(() => import('../../../../components/StyledComponents/StyledSidebar'))
const SidebarDadosGerais = loadable(() => import('./components/SidebarDadosGerais'))
const SidebarDadosInternos = loadable(() => import('./components/SidebarDadosInternos'))
const SidebarDadosImovel = loadable(() => import('./components/SidebarDadosImovel'))

const Sidebar = ({
  //DADOS GERAIS
  refIsVisibleDadosGerais,
  refSidebarDadosGerais,
  //DADOS INTERNOS
  refIsVisibleDadosInternos,
  refSidebarDadosInternos,
  //DADOS IMOVEL
  refIsVisibleDadosImovel,
  refSidebarDadosImovel,
}: INovoContratoSidebar) => {

  return (
    <StyledSidebar>
      <SidebarDadosGerais
        refIsVisibleDadosGerais={refIsVisibleDadosGerais}
        refSidebarDadosGerais={refSidebarDadosGerais}
      />
      <SidebarDadosInternos
        refIsVisibleDadosInternos={refIsVisibleDadosInternos}
        refSidebarDadosInternos={refSidebarDadosInternos}
      />
      <SidebarDadosImovel
        refIsVisibleDadosImovel={refIsVisibleDadosImovel}
        refSidebarDadosImovel={refSidebarDadosImovel}
      />
      <p>SECTION</p>
      <p>SECTION</p>
      <p>SECTION</p>
      <p>SECTION</p>
    </StyledSidebar>
  )
}

export default Sidebar