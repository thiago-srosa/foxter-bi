import {
  NovoContratoState,
  NovoContratoActionTypes,
  //DADOS GERAIS
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
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
  //DADOS IMÓVEL
  SET_NOVO_CONTRATO_IMOVEL_LOGRADOURO,
  SET_NOVO_CONTRATO_IMOVEL_BAIRRO,
  SET_NOVO_CONTRATO_IMOVEL_CIDADE,
  //DADOS VENDEDORES
  ADD_NOVO_CONTRATO_VENDEDORES,
  //RESET
  RESET_NOVO_CONTRATO,
} from './types'

const initialState: NovoContratoState = {
  //INFORMAÇÕES AUXILIARES PARA O DESENVOLVEDOR
  novoContratoRadioButtonCalculaValorNegociacao: null,
  //DADOS GERAIS DA VENDA
  novoContratoValorTotalVenda: null,
  novoContratoValorLiquidoVenda: null,
  novoContratoValorCorretagemVenda: null,
  novoContratoPercentualCorretagemVenda: null,
  novoContratoVendedores: [],
  //DADOS INTERNOS
  novoContratoNumeroAgsFoco: null,
  novoContratoExclusividade: null,
  novoContratoCodigoOportunidade: null,
  novoContratoOrigemCaptacao: null,
  novoContratoOutraOrigemCaptacao: null,
  novoContratoOrigemCaptacaoPortal: null,
  //DADOS IMÓVEL
  novoContratoImovelLogradouro: null,
  novoContratoImovelBairro: null,
  novoContratoImovelCidade: null,
};

function NovoContratoReducer(
  state = initialState,
  action: NovoContratoActionTypes
): NovoContratoState {
  switch (action.type) {

    //DADOS GERAIS
    case SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO:
      return { ...state, novoContratoRadioButtonCalculaValorNegociacao: action.payload }
    case SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA:
      return { ...state, novoContratoValorTotalVenda: action.payload }
    case SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA:
      return { ...state, novoContratoValorLiquidoVenda: action.payload }
    case SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA:
      return { ...state, novoContratoValorCorretagemVenda: action.payload }
    case SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA:
      return { ...state, novoContratoPercentualCorretagemVenda: action.payload }

    //DADOS INTERNOS
    case SET_NOVO_CONTRATO_CODIGO_OPORTUNIDADE:
      return { ...state, novoContratoCodigoOportunidade: action.payload }
    case SET_NOVO_CONTRATO_EXCLUSIVIDADE:
      return { ...state, novoContratoExclusividade: action.payload }
    case SET_NOVO_CONTRATO_NUMERO_AGS_FOCO:
      return { ...state, novoContratoNumeroAgsFoco: action.payload }
    case SET_NOVO_CONTRATO_ORIGEM_CAPTACAO:
      return { ...state, novoContratoOrigemCaptacao: action.payload }
    case SET_NOVO_CONTRATO_OUTRA_ORIGEM_CAPTACAO:
      return { ...state, novoContratoOutraOrigemCaptacao: action.payload }
    case SET_NOVO_CONTRATO_ORIGEM_CAPTACAO_PORTAL:
      return { ...state, novoContratoOrigemCaptacaoPortal: action.payload }

    //DADOS IMÓVEL
    case SET_NOVO_CONTRATO_IMOVEL_LOGRADOURO:
      return { ...state, novoContratoImovelLogradouro: action.payload }
    case SET_NOVO_CONTRATO_IMOVEL_BAIRRO:
      return { ...state, novoContratoImovelBairro: action.payload }
    case SET_NOVO_CONTRATO_IMOVEL_CIDADE:
      return { ...state, novoContratoImovelCidade: action.payload }

    case ADD_NOVO_CONTRATO_VENDEDORES:
      return { ...state, novoContratoVendedores: [...state.novoContratoVendedores, action.payload] }

    //RESET
    case RESET_NOVO_CONTRATO:
      return initialState;
    //DEFAULT
    default:
      return state;
  }
}

export default NovoContratoReducer;