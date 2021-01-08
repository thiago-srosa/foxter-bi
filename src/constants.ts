import { green } from '@material-ui/core/colors'
import { IOptions } from './types'

export const novoContratoRadioOptions: IOptions = {
  value1: 'Valor líquido',
  value2: 'Valor corretagem',
  value3: 'Percentual corretagem',
}

export const origemCaptacao: object = {
  value1: 'Ações externas',
  value2: 'Agenciamento vendido',
  value3: 'Chat',
  value4: 'Disparo e-mail mkt',
  value5: 'Facebook',
  value6: 'Indicação',
  value7: 'Ligação Foxter',
  value8: 'Ligação Placa',
  value9: 'Oferta ativa',
  value10: 'Plantão externo',
  value11: 'Parcerias',
  value12: 'Reaproveitamento de oportunidade',
  value13: 'Revista Foxter Gallery',
  value14: 'Site Foxter',
  value15: 'Site novidade imobiliária',
  value16: 'Site perdigueiro',
  value17: 'SMS',
  value18: 'Visita loja', 
  value19: 'Contato pessoal corretor',
  value20: 'Anúncio patrocinado',
  value21: 'Portal',
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