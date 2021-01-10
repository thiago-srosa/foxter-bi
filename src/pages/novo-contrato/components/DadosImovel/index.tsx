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
  setNovoContratoOutraOrigemCaptacao,
  setNovoContratoOrigemCaptacaoPortal,
} from '../../../../../store/novoContrato/actions'
//STYLES
import { useStyles } from '../../styles'
//TYPES
import { INovoContratoSidebarDadosImovel } from '../../../../types'
import { NumberFormatProps } from '../../../../components/NumberFormatCustom'
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
const NumberFormatCustom = loadable(() => import('../../../../components/NumberFormatCustom'))
const Select = loadable(() => import('@material-ui/core/Select'))
const MenuItem = loadable(() => import('@material-ui/core/MenuItem'))

const DadosImovel = ({ refIsVisibleDadosImovel, refSidebarDadosImovel }: INovoContratoSidebarDadosImovel) => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    novoContratoOrigemCaptacao,
    novoContratoNumeroAgsFoco,
    novoContratoExclusividade,
    novoContratoCodigoOportunidade,
    novoContratoOutraOrigemCaptacao,
    novoContratoOrigemCaptacaoPortal,
  } = useSelector((state: RootState) => state.novoContrato)

  const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).value === true.toString() ? dispatch(setNovoContratoExlusividade(true)) : dispatch(setNovoContratoExlusividade(false))
  }

  return (
    <StyledDivWrapper ref={refIsVisibleDadosImovel}>
      <H2 ref={refSidebarDadosImovel}>Dados internos</H2>

      <H3>Imóvel é exclusividade Foxter?</H3>
      <FormControl >
        <RadioGroup row name="NovoContratoExclusivadeSelection" value={novoContratoExclusividade} onChange={handleOnChangeRadio}>
          <FormControlLabel value={true} control={<Radio color='primary' />} label="Sim" />
          <FormControlLabel value={false} control={<Radio color='primary' />} label="Não" />
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
        inputComponent={NumberFormatCustom as any}
        inputProps={{
          thousandSeparator: '.',
          decimalScale: 1,
          fixedDecimalScale: false,
        } as NumberFormatProps}
      />

      <H3>Código da oportunidade no Konecty:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='codigoKonecty'
        required
        value={novoContratoCodigoOportunidade ? novoContratoCodigoOportunidade : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoCodigoOportunidade(+e.target.value)) }}
        inputComponent={NumberFormatCustom as any}
        inputProps={{
          thousandSeparator: '',
          decimalScale: 0,
          fixedDecimalScale: false,
        } as NumberFormatProps}
      />
      <H3>Origem da captção do comprador:</H3>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          id="sleectOptions"
          value={novoContratoOrigemCaptacao ? novoContratoOrigemCaptacao : ''}
          onChange={(e) => dispatch(setNovoContratoOrigemCaptacao(e.target.value.toString()))}
        >

          {Object.values(origemCaptacao).map((opcao, index) => <MenuItem key={index} value={opcao}>{opcao}</MenuItem>)}
        </Select>
      </FormControl>

      {novoContratoOrigemCaptacao === 'Outra' ?
        <>
          <H3>Qual o nome dessa outra origem de captação?</H3>
          <OutlinedInput
            className={classes.outlinedInputSmall}
            id='selecaoOutra'
            required
            value={novoContratoOutraOrigemCaptacao ? novoContratoOutraOrigemCaptacao : ''}
            autoComplete='off'
            onChange={(e) => { dispatch(setNovoContratoOutraOrigemCaptacao(e.target.value)) }}
          />
        </>
        : null
      }

      {novoContratoOrigemCaptacao === 'Portal' ?
        <>
          <H3>Qual o nome dessa outra origem de captação?</H3>
          <OutlinedInput
            className={classes.outlinedInputSmall}
            id='selecaoPortal'
            required
            value={novoContratoOrigemCaptacaoPortal ? novoContratoOrigemCaptacaoPortal : ''}
            autoComplete='off'
            onChange={(e) => { dispatch(setNovoContratoOrigemCaptacaoPortal(e.target.value)) }}
          />
        </>
        : null
      }

    </StyledDivWrapper>
  )
}

export default DadosImovel;