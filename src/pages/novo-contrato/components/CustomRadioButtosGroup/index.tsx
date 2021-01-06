//REACT
import React from 'react'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//GLOBAL ACTIONS
import {
  setNovoContratoRadioButtonCalculaValorNegocicao,
} from '../../../../../store/global/actions'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const FormControl = loadable(() => import('@material-ui/core/FormControl'))
const FormLabel = loadable(() => import('@material-ui/core/FormLabel'))
const RadioGroup = loadable(() => import('@material-ui/core/RadioGroup'))
const FormControlLabel = loadable(() => import('@material-ui/core/FormControlLabel'))
const Radio = loadable(() => import('@material-ui/core/Radio'))

function CustomRadioButtosGroup() {

  const { NovoContratoRadioButtonCalculaValorNegociacao } = useSelector((state: RootState) => state.global)
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNovoContratoRadioButtonCalculaValorNegocicao((event.target as HTMLInputElement).value))
  };

  return (
    <FormControl >
      <RadioGroup aria-label="gender" name="gender1" value={NovoContratoRadioButtonCalculaValorNegociacao} onChange={handleChange}>
        <FormControlLabel value="Valor líquido" control={<Radio color='primary' />} label='Valor líquido' />
        <FormControlLabel value='Valor corretagem' control={<Radio color='primary' />} label='Valor corretagem' />
        <FormControlLabel value='Percentual corretagem' control={<Radio color='primary' />} label='Percentual corretagem' />
      </RadioGroup>
    </FormControl>
  );
}
export default CustomRadioButtosGroup