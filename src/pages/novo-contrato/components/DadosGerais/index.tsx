//REACT
import React, { useRef } from 'react'
////REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//NOVO CONTRATO ACTIONS
import {
  setNovoContratoValorTotalVenda,
  setNovoContratoValorLiquidoVenda,
  setNovoContratoValorCorretagemVenda,
  setNovoContratoPercentualCorretagemVenda,
} from '../../../../../store/novoContrato/actions'
//TYPES
import { NumberFormatProps } from '../../../../components/NumberFormatCustom'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const StyledDivWrapper = loadable(() => import('./../../../../components/StyledComponents/StyledDivWrapper'))
const H2 = loadable(() => import('../../../../components/StyledComponents/StyledH2'))
const H3 = loadable(() => import('../../../../components/StyledComponents/StyledH3'))
const OutlinedInput = loadable(() => import('@material-ui/core/OutlinedInput'))
const InputAdornment = loadable(() => import('@material-ui/core/InputAdornment'))
const NumberFormatCustom = loadable(() => import('../../../../components/NumberFormatCustom'))
const CustomRadioButtosGroup = loadable(() => import('../../../novo-contrato/components/DadosGerais/components/CustomRadioButtosGroup'))
//STYLES
import { useStyles } from '../../styles'
//TYPES
import { INovoContratoSidebarDadosGerais } from '../../../../types'
//CONSTANTES
import { novoContratoRadioOptions } from '../../../../constants'

const DadosGerais = ({ refIsVisibleDadosGerais, refSidebarDadosGerais }: INovoContratoSidebarDadosGerais) => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    novoContratoRadioButtonCalculaValorNegociacao,
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorretagemVenda,
    novoContratoPercentualCorretagemVenda,
  } = useSelector((state: RootState) => state.novoContrato)

  return (
    <StyledDivWrapper ref={refIsVisibleDadosGerais}>
      <H2 ref={refSidebarDadosGerais}>Dados gerais</H2>
      <H3>Valor total da venda</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='ValorTotal'
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        required
        value={novoContratoValorTotalVenda ? novoContratoValorTotalVenda : ''}
        autoComplete='off'
        onChange={e => {
          dispatch(setNovoContratoValorTotalVenda(parseInt(e.target.value)))

          switch (novoContratoRadioButtonCalculaValorNegociacao) {
            //RADIO BUTTON= valor-liquido
            case novoContratoRadioOptions.value1:
              dispatch(setNovoContratoValorCorretagemVenda(parseInt(e.target.value) - novoContratoValorLiquidoVenda))
              dispatch(setNovoContratoPercentualCorretagemVenda((parseInt(e.target.value) - novoContratoValorLiquidoVenda) / parseInt(e.target.value) * 100))
              break;
            //RADIO BUTTON = valor corretagem
            case novoContratoRadioOptions.value2:
              dispatch(setNovoContratoValorLiquidoVenda(parseInt(e.target.value) - novoContratoValorCorretagemVenda))
              dispatch(setNovoContratoPercentualCorretagemVenda(novoContratoValorCorretagemVenda / parseInt(e.target.value) * 100))
              break;
            //RADIO BUTTON = pertual corretagem
            case novoContratoRadioOptions.value3:
              dispatch(setNovoContratoValorCorretagemVenda(parseInt(e.target.value) * novoContratoPercentualCorretagemVenda / 100))
              dispatch(setNovoContratoValorLiquidoVenda(parseInt(e.target.value) - parseInt(e.target.value) * novoContratoPercentualCorretagemVenda / 100))
              break;
            default:
              null
          }
        }}
        inputComponent={NumberFormatCustom as any}
        inputProps={{
          thousandSeparator: '.',
          decimalScale: 2,
          fixedDecimalScale: true,
        } as NumberFormatProps}
      />

      <CustomRadioButtosGroup />

    </StyledDivWrapper>
  )
}

export default DadosGerais;