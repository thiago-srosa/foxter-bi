
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
const SidebarVagasGaragem = loadable(() => import('./components/SidebarVagasGaragem'))

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
  //DADOS IMOVEL
  refIsVisibleVagasGaragem,
  refSidebarVagasGaragem,
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
      <SidebarVagasGaragem
        refIsVisibleVagasGaragem={refIsVisibleVagasGaragem}
        refSidebarVagasGaragem={refSidebarVagasGaragem}
      />
    </StyledSidebar>
  )
}

export default Sidebar