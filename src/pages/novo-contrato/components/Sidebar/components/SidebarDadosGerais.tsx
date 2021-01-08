//REACT
import React from 'react'
//CONSTANTS
import { scrollIntoView, styleRadioButtonUncheckedIcon, styleCheckCircleIcon } from '../../../../../constants'
//INTERFACES
import { INovoContratoSidebar } from '../../../../../types'
//REACT-REDUX
import { useSelector } from "react-redux"
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../../store/reducers'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const RadioButtonUncheckedIcon = loadable(() => import('@material-ui/icons/RadioButtonUnchecked'))
const StyledSidebarSectionDiv = loadable(() => import('../components/StyledComponents/StyledSidebarSectionDiv'))
const CheckCircleIcon = loadable(() => import('@material-ui/icons/CheckCircle'))

const SidebarDadosGerais = (props: INovoContratoSidebar) => {

  const {
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorretagemVenda,
    novoContratoPercentualCorretagemVenda,
  } = useSelector((state: RootState) => state.novoContrato)

  function handleOnClickDadosGerais() {
    props.refDadosGerais.current.scrollIntoView({ scrollIntoView })
  }

  let iconStatus: React.ReactElement

  if (novoContratoValorTotalVenda>0 &&
    novoContratoValorLiquidoVenda>0 &&
    novoContratoValorCorretagemVenda>0 &&
    novoContratoPercentualCorretagemVenda>0
  ) {
    iconStatus = <CheckCircleIcon style={styleCheckCircleIcon} fontSize='small' color='action' />
  }
  else {
    iconStatus = <RadioButtonUncheckedIcon style={styleRadioButtonUncheckedIcon} fontSize='small' color='action' />
  }

  return (
    <StyledSidebarSectionDiv onClick={handleOnClickDadosGerais}>
      {iconStatus}
        Dados gerais
    </StyledSidebarSectionDiv>
  )
}

export default SidebarDadosGerais



