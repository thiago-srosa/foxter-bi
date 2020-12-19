import { HYDRATE } from "next-redux-wrapper";
import {
  SET_NOVO_CLIENTE_NOME_COMPLETO,
  SET_NOVO_CLIENTE_CPF,
  SET_NOVO_CLIENTE_RG,
  SET_NOVO_CLIENTE_EMAIL,
  SET_NOVO_CLIENTE_TELEFONE,
  SET_NOVO_CLIENTE_PROFISSAO,
  SET_NOVO_CLIENTE_ESTADO_CIVIL,
  SET_NOVO_CLIENTE_REGIME_BENS,
  SET_NOVO_CLIENTE_ENDERECO,
  SET_NOVO_CLIENTE_BAIRRO,
  SET_NOVO_CLIENTE_MUNICIPIO,
  SET_NOVO_CLIENTE_CEP,
  SET_NOVO_CLIENTE_OBSERVACAO,
  RESET_NOVO_CLIENTE,
} from "../../actions";

const initialState = {
  novoClienteNomeCompleto: '',
  novoClienteCPF: '',
  novoClienteRG: '',
  novoClienteEmail: '',
  novoClienteTelefone: '',
  novoClienteProfissao: '',
  novoClienteEstadoCivil: null,
  novoClienteRegimedeBens: null,
  novoClienteEndereco: '',
  novoClienteBairro: '',
  novoClienteMunicipio: '',
  novoClienteCEP: '',
  novoClienteObservacao: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.novoClientePF };
    case SET_NOVO_CLIENTE_NOME_COMPLETO:
      return { ...state, novoClienteNomeCompleto: action.payload };
    case SET_NOVO_CLIENTE_CPF:
      return { ...state, novoClienteCPF: action.payload };
    case SET_NOVO_CLIENTE_RG:
      return { ...state, novoClienteRG: action.payload };
    case SET_NOVO_CLIENTE_EMAIL:
      return { ...state, novoClienteEmail: action.payload };
    case SET_NOVO_CLIENTE_TELEFONE:
      return { ...state, novoClienteTelefone: action.payload };
    case SET_NOVO_CLIENTE_PROFISSAO:
      return { ...state, novoClienteProfissao: action.payload };
    case SET_NOVO_CLIENTE_ESTADO_CIVIL:
      return { ...state, novoClienteEstadoCivil: action.payload };
    case SET_NOVO_CLIENTE_REGIME_BENS:
      return { ...state, novoClienteRegimedeBens: action.payload };
    case SET_NOVO_CLIENTE_ENDERECO:
      return { ...state, novoClienteEndereco: action.payload };
    case SET_NOVO_CLIENTE_BAIRRO:
      return { ...state, novoClienteBairro: action.payload };
    case SET_NOVO_CLIENTE_MUNICIPIO:
      return { ...state, novoClienteMunicipio: action.payload };
    case SET_NOVO_CLIENTE_CEP:
      return { ...state, novoClienteCEP: action.payload };
    case SET_NOVO_CLIENTE_OBSERVACAO:
      return { ...state, novoClienteObservacao: action.payload };
    case RESET_NOVO_CLIENTE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;