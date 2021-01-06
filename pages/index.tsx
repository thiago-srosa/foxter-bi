//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const HomePage = loadable(() => import('../src/pages/home'))

export default HomePage