import {
  SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
  SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
  SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
  SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
  NovoContratoActionTypes
} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function SetNovoContratoValorTotalVenda(novoContratoValorTotalVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
    payload: novoContratoValorTotalVenda
  }
}

export function SetNovoContratoValorLiquidoVenda(novoContratoValorLiquidoVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
    payload: novoContratoValorLiquidoVenda
  }
}

export function SetNovoContratoValorCorretagemVenda(novoContratoValorCorretagemVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
    payload: novoContratoValorCorretagemVenda
  }
}

export function SetNovoContratoPercentualCorretagemVenda(novoContratoPercentualCorretagemVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
    payload: novoContratoPercentualCorretagemVenda
  }
}

export function NovoContratoReset(): NovoContratoActionTypes {
  return {
    type: RESET_NOVO_CONTRATO,    
  }
}