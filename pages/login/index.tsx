//LOADABLE-COMPONENT
import loadable from '@loadable/component'

const LoginPage = loadable(() => import('../../src/pages/login'))

export default LoginPage