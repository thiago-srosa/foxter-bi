//REACT
import React, { useRef } from 'react'
////REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//NOVO CONTRATO ACTIONS
import {
  setNovoContratoExlusividade,
  setNovoContratoNumeroAgsFoco,
  setNovoContratoOrigemCaptacao,
  setNovoContratoCodigoOportunidade,
} from '../../../../../store/novoContrato/actions'
//STYLES
import { useStyles } from '../../styles'
//CONSTANTS
import { origemCaptacao } from '../../../../constants'
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
const NumberFormat = loadable(() => import('react-number-format'))
const Select = loadable(() => import('@material-ui/core/Select'))
const MenuItem = loadable(() => import('@material-ui/core/MenuItem'))

const DadosInternos = ({ refDadosInternos }) => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    novoContratoOrigemCaptacao,
    novoContratoNumeroAgsFoco,
    novoContratoExclusividade,
    novoContratoCodigoOportunidade,
  } = useSelector((state: RootState) => state.novoContrato)

  const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).value === true.toString() ? dispatch(setNovoContratoExlusividade(true)) : dispatch(setNovoContratoExlusividade(false))
  }

  return (
    <StyledDivWrapper>
      <H2 ref={refDadosInternos}>Dados internos</H2>

      <H3>Imóvel é exclusividade Foxter?</H3>
      <FormControl >
        <RadioGroup row name="NovoContratoExclusivadeSelection" value={novoContratoExclusividade} onChange={handleOnChangeRadio}>
          <FormControlLabel value={true} control={<Radio />} label="Sim" />
          <FormControlLabel value={false} control={<Radio />} label="Não" />
        </RadioGroup>
      </FormControl>

      <H3>Número de agenciamentos foco do corretor vendedor:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='numeroAgs'
        required
        value={novoContratoNumeroAgsFoco ? novoContratoNumeroAgsFoco : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoNumeroAgsFoco(+e.target.value)) }}
        inputComponent={NumberFormat as any}
      />

      <H3>Código da oportunidade no Konecty:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='numeroAgs'
        required
        value={novoContratoCodigoOportunidade ? novoContratoCodigoOportunidade : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoCodigoOportunidade(+e.target.value)) }}
        inputComponent={NumberFormat as any}
      />
      <H3>Origem da captção do comprador:</H3>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={novoContratoOrigemCaptacao}
          onChange={(e) => dispatch(setNovoContratoOrigemCaptacao(e.target.value.toString()))}
        >
          
          {Object.values(origemCaptacao).map((opcao, index) => <MenuItem key={index} value={opcao}>{opcao}</MenuItem>)}          
        </Select>
      </FormControl>

    </StyledDivWrapper>
  )
}

export default DadosInternos;