import { green } from '@material-ui/core/colors'
import { IOptions } from './types'

export const novoContratoRadioOptions: IOptions = {
  value1: 'Valor líquido',
  value2: 'Valor corretagem',
  value3: 'Percentual corretagem',
}

export const scrollIntoView: object = {
  behavior: "smooth",
  block: "nearest",
}

export const styleRadioButtonUncheckedIcon: object = {
  paddingRight: '5px',
}

export const styleCheckCircleIcon: object = {
  paddingRight: '5px',
  color: green[500],
}