//REACT
import React, { useRef } from 'react'
////REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//NOVO CONTRATO ACTIONS
import {
  setNovoContratoImovelCidade,
  setNovoContratoImovelBairro,
  setNovoContratoImovelLogradouro,
  setNovoContratoImovelNumero,
  setNovoContratoImovelComplemento,
  setNovoContratoImovelEmCondominio,
  setNovoContratoImovelAdmCondominio,
  setNovoContratoImovelInscricaoIptu,
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
    novoContratoImovelCidade,
    novoContratoImovelBairro,
    novoContratoImovelLogradouro,
    novoContratoImovelNumero,
    novoContratoImovelComplemento,
    novoContratoImovelEmCondominio,
    novoContratoImovelAdmCondominio,
    novoContratoImovelInscricaoIptu,
  } = useSelector((state: RootState) => state.novoContrato)

  const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).value === true.toString() ? dispatch(setNovoContratoImovelEmCondominio(true)) : dispatch(setNovoContratoImovelEmCondominio(false))
  }

  return (
    <StyledDivWrapper ref={refIsVisibleVagasGaragem}>
      <H2 ref={refSidebarVagasGaragem}>Vagas de garagem</H2>

      <H3>Cidade onde o imóvel está localizado:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='imovci'
        required
        fullWidth={true}
        value={novoContratoImovelCidade ? novoContratoImovelCidade : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoImovelCidade(e.target.value)) }}
      />

    </StyledDivWrapper>
  )
}

export default VagasGaragem;