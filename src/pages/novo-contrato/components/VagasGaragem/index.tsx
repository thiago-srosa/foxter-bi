//REACT
import React, { useRef } from 'react'
////REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//NOVO CONTRATO ACTIONS
import {
  setNovoContratoVagaGaragemFazParteNegociacao,
  setNovoContratoVagaGaragemEscrituradas,
  setNovoContratoVagaGaragemVinculadas,
} from '../../../../../store/novoContrato/actions'
//STYLES
import { useStyles } from '../../styles'
//TYPES
import { INovoContratoSidebarVagasGaragem } from '../../../../types'
import { NumberFormatProps } from '../../../../components/NumberFormatCustom'
//CONSTANTS
import { } from '../../../../constants'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const StyledDivWrapper = loadable(() => import('./../../../../components/StyledComponents/StyledDivWrapper'))
const H2 = loadable(() => import('../../../../components/StyledComponents/StyledH2'))
const H3 = loadable(() => import('../../../../components/StyledComponents/StyledH3'))
const FormControl = loadable(() => import('@material-ui/core/FormControl'))
const RadioGroup = loadable(() => import('@material-ui/core/RadioGroup'))
const FormControlLabel = loadable(() => import('@material-ui/core/FormControlLabel'))
const Radio = loadable(() => import('@material-ui/core/Radio'))
const OutlinedInput = loadable(() => import('@material-ui/core/OutlinedInput'))
const NumberFormatCustom = loadable(() => import('../../../../components/NumberFormatCustom'))
const Select = loadable(() => import('@material-ui/core/Select'))
const MenuItem = loadable(() => import('@material-ui/core/MenuItem'))

const VagasGaragem = ({ refIsVisibleVagasGaragem, refSidebarVagasGaragem }: INovoContratoSidebarVagasGaragem) => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    novoContratoVagaGaragemFazParteNegociacao,
    novoContratoVagaGaragemEscrituradas,
    novoContratoVagaGaragemVinculadas,
  } = useSelector((state: RootState) => state.novoContrato)

  const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).value === true.toString() ? dispatch(setNovoContratoVagaGaragemFazParteNegociacao(true)) : dispatch(setNovoContratoVagaGaragemFazParteNegociacao(false))
  }

  return (
    <StyledDivWrapper ref={refIsVisibleVagasGaragem}>
      <H2 ref={refSidebarVagasGaragem}>Vagas de garagem</H2>

      <H3>Vaga(s) de garagem faz(em) parte da negociação?</H3>
      <FormControl >
        <RadioGroup row value={novoContratoVagaGaragemFazParteNegociacao} onChange={handleOnChangeRadio}>
          <FormControlLabel value={true} control={<Radio color='primary' />} label="Sim" />
          <FormControlLabel value={false} control={<Radio color='primary' />} label="Não" />
        </RadioGroup>
      </FormControl>

      {novoContratoVagaGaragemFazParteNegociacao ?
        <>
          <H3>Número de vagas garagem escrituradas:</H3>
          <OutlinedInput
            className={classes.outlinedInputSmall}
            id='vagasEscrituradas'
            required
            value={novoContratoVagaGaragemEscrituradas ? novoContratoVagaGaragemEscrituradas : ''}
            autoComplete='off'
            onChange={(e) => { dispatch(setNovoContratoVagaGaragemEscrituradas(+e.target.value)) }}
            inputComponent={NumberFormatCustom as any}
            inputProps={{
              thousandSeparator: '.',
              decimalScale: 0,
              fixedDecimalScale: false,
            } as NumberFormatProps}
          />

          <H3>Número de vagas garagem vinculadas à matrícula do imóvel:</H3>
          <OutlinedInput
            className={classes.outlinedInputSmall}
            id='vagasVinculadas'
            required
            value={novoContratoVagaGaragemVinculadas ? novoContratoVagaGaragemVinculadas : ''}
            autoComplete='off'
            onChange={(e) => { dispatch(setNovoContratoVagaGaragemVinculadas(+e.target.value)) }}
            inputComponent={NumberFormatCustom as any}
            inputProps={{
              thousandSeparator: '.',
              decimalScale: 0,
              fixedDecimalScale: false,
            } as NumberFormatProps}
          />
        </>
        :
        null
      }

    </StyledDivWrapper>
  )
}

export default VagasGaragem;