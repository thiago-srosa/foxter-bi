import {
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
} from "..";

export const addNovoContratoVendedores = (novoContratoVendedores) => ({
  type: ADD_NOVO_CONTRATO_VENDEDORES,
  payload: novoContratoVendedores,
})
