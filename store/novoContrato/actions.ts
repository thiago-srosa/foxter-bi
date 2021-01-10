import {
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
  //DADOS GERAIS
  SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
  SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
  SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
  SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
  //DADOS INTERNOS
  SET_NOVO_CONTRATO_CODIGO_OPORTUNIDADE,
  SET_NOVO_CONTRATO_EXCLUSIVIDADE,
  SET_NOVO_CONTRATO_NUMERO_AGS_FOCO,
  SET_NOVO_CONTRATO_ORIGEM_CAPTACAO,
  SET_NOVO_CONTRATO_OUTRA_ORIGEM_CAPTACAO,
  SET_NOVO_CONTRATO_ORIGEM_CAPTACAO_PORTAL,
  //DADOS VENDEDORES
  ADD_NOVO_CONTRATO_VENDEDORES,
  //DADOS IMÓVEL
  SET_NOVO_CONTRATO_IMOVEL_LOGRADOURO,
  //RESET
  RESET_NOVO_CONTRATO,
  NovoContratoActionTypes
} from './types'

import { NovoVendedorPFState } from './novoVendedorPF/types'

// TypeScript infers that this function is returning SendMessageAction

export function setNovoContratoImovelLogradouro(logradouro: string): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_IMOVEL_LOGRADOURO,
    payload: logradouro
  }
}

export function setNovoContratoOrigemCaptacaoPortal(origemCaptacaoPortal: string): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_ORIGEM_CAPTACAO_PORTAL,
    payload: origemCaptacaoPortal
  }
}

export function setNovoContratoOutraOrigemCaptacao(outraOrigemCaptacao: string): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_OUTRA_ORIGEM_CAPTACAO,
    payload: outraOrigemCaptacao
  }
}

export function setNovoContratoOrigemCaptacao(origemCaptacao: string): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_ORIGEM_CAPTACAO,
    payload: origemCaptacao
  }
}

export function setNovoContratoNumeroAgsFoco(numeroAgsFoco: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_NUMERO_AGS_FOCO,
    payload: numeroAgsFoco
  }
}

export function setNovoContratoExlusividade(exclusividade: boolean): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_EXCLUSIVIDADE,
    payload: exclusividade
  }
}
export function setNovoContratoCodigoOportunidade(codigoOportunidade: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_CODIGO_OPORTUNIDADE,
    payload: codigoOportunidade
  }
}

export function setNovoContratoRadioButtonCalculaValorNegocicao(selection: string): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
    payload: selection
  }
}

export const addNovoContratoVendedores = (novoContratoVendedores: NovoVendedorPFState): NovoContratoActionTypes => ({
  type: ADD_NOVO_CONTRATO_VENDEDORES,
  payload: novoContratoVendedores,
})

export function setNovoContratoValorTotalVenda(novoContratoValorTotalVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
    payload: novoContratoValorTotalVenda
  }
}

export function setNovoContratoValorLiquidoVenda(novoContratoValorLiquidoVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
    payload: novoContratoValorLiquidoVenda
  }
}

export function setNovoContratoValorCorretagemVenda(novoContratoValorCorretagemVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
    payload: novoContratoValorCorretagemVenda
  }
}

export function setNovoContratoPercentualCorretagemVenda(novoContratoPercentualCorretagemVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
    payload: novoContratoPercentualCorretagemVenda
  }
}

export function resetNovoContrato(): NovoContratoActionTypes {
  return {
    type: RESET_NOVO_CONTRATO,
  }
}