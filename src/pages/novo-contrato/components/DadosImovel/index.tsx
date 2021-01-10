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
import { INovoContratoSidebarDadosImovel } from '../../../../types'
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

const DadosImovel = ({ refIsVisibleDadosImovel, refSidebarDadosImovel }: INovoContratoSidebarDadosImovel) => {

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
    <StyledDivWrapper ref={refIsVisibleDadosImovel}>
      <H2 ref={refSidebarDadosImovel}>Dados do Imóvel</H2>

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

      <H3>Bairro onde o imóvel está localizado:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='imovelbair'
        required
        fullWidth={true}
        value={novoContratoImovelBairro ? novoContratoImovelBairro : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoImovelBairro(e.target.value)) }}
      />

      <H3>Logradouro onde o imóvel está localizado:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='logradouro'
        required
        fullWidth={true}
        value={novoContratoImovelLogradouro ? novoContratoImovelLogradouro : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoImovelLogradouro(e.target.value)) }}
      />

      <H3>Número do endereço do imóvel:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='logradouro'
        required
        value={novoContratoImovelNumero ? novoContratoImovelNumero : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoImovelNumero(+e.target.value)) }}
        inputComponent={NumberFormatCustom as any}
        inputProps={{
          thousandSeparator: '.',
          decimalScale: 0,
          fixedDecimalScale: false,
        } as NumberFormatProps}
      />

      <H3>Complemento do endereço do imóvel:</H3>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='compl'
        required
        fullWidth={true}
        value={novoContratoImovelComplemento ? novoContratoImovelComplemento : ''}
        autoComplete='off'
        onChange={(e) => { dispatch(setNovoContratoImovelComplemento(e.target.value)) }}
      />

      <H3>Imóvel em condomínio?</H3>
      <FormControl >
        <RadioGroup row name="NovoContratoImovelEmCondominio" value={novoContratoImovelEmCondominio} onChange={handleOnChangeRadio}>
          <FormControlLabel value={true} control={<Radio color='primary' />} label="Sim" />
          <FormControlLabel value={false} control={<Radio color='primary' />} label="Não" />
        </RadioGroup>
      </FormControl>

      {novoContratoImovelEmCondominio ?
        <>
          <H3>Qual é a administradora do condomínio?</H3>
          <OutlinedInput
            className={classes.outlinedInputSmall}
            id='admcondominio'
            required
            fullWidth={true}
            value={novoContratoImovelAdmCondominio ? novoContratoImovelAdmCondominio : ''}
            autoComplete='off'
            onChange={(e) => { dispatch(setNovoContratoImovelAdmCondominio(e.target.value)) }}
          />
        </>
        :
        <>
          <H3>Qual o nº de inscrição do IPTU?</H3>
          <OutlinedInput
            className={classes.outlinedInputSmall}
            id='iptu'
            required
            value={novoContratoImovelInscricaoIptu ? novoContratoImovelInscricaoIptu : ''}
            autoComplete='off'
            onChange={(e) => { dispatch(setNovoContratoImovelInscricaoIptu(+e.target.value)) }}
            inputComponent={NumberFormatCustom as any}
            inputProps={{
              thousandSeparator: '.',
              decimalScale: 0,
              fixedDecimalScale: false,
            } as NumberFormatProps}
          />
        </>
      }

    </StyledDivWrapper>
  )
}

export default DadosImovel;