//REACT
import React from 'react'
//CONSTANTS
import { scrollIntoView, styleRadioButtonUncheckedIcon, styleCheckCircleIcon, isVisibleSidebar } from '../../../../../constants'
//INTERFACES
import { INovoContratoSidebarDadosInternos } from '../../../../../types'
//REACT-REDUX
import { useSelector } from "react-redux"
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../../store/reducers'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const RadioButtonUncheckedIcon = loadable(() => import('@material-ui/icons/RadioButtonUnchecked'))
const StyledSidebarSectionDiv = loadable(() => import('../components/StyledComponents/StyledSidebarSectionDiv'))
const CheckCircleIcon = loadable(() => import('@material-ui/icons/CheckCircle'))
//REACT IS VISIBLE
import { useIsVisible } from "react-is-visible"

const SidebarDadosInternos = ({ refIsVisibleDadosInternos, refSidebarDadosInternos }: INovoContratoSidebarDadosInternos) => {

  const isVisible = useIsVisible(refIsVisibleDadosInternos)
  const {
    novoContratoExclusividade,
    novoContratoCodigoOportunidade,
    novoContratoNumeroAgsFoco,
    novoContratoOrigemCaptacao,
  } = useSelector((state: RootState) => state.novoContrato)

  function handleOnClickDadosGerais() {
    refSidebarDadosInternos.current.scrollIntoView({ scrollIntoView })
  }

  let iconStatus: React.ReactElement

  if (novoContratoExclusividade != null &&
    novoContratoCodigoOportunidade > 0 &&
    novoContratoNumeroAgsFoco > 0 &&
    novoContratoOrigemCaptacao != null
  ) {
    iconStatus = <CheckCircleIcon style={styleCheckCircleIcon} fontSize='small' color='action' />
  }
  else {
    iconStatus = <RadioButtonUncheckedIcon style={styleRadioButtonUncheckedIcon} fontSize='small' color='action' />
  }

  return (
    <StyledSidebarSectionDiv style={isVisible ? isVisibleSidebar : null} onClick={handleOnClickDadosGerais}>
      {iconStatus}
        Dados internos
    </StyledSidebarSectionDiv>
  )
}

export default SidebarDadosInternos



