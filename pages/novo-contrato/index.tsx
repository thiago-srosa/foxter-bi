//LOADABLE-COMPONENT
import loadable from '@loadable/component'

const NovoContrato = loadable(() => import('../../src/pages/novo-contrato'))

export default NovoContrato