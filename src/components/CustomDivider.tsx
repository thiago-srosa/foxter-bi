//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const Divider = loadable(() => import('@material-ui/core/Divider'))

const CustomStyle: object = {
  margin: '15px 0px 15px 0px',
}

const CustomDivider = (): JSX.Element => {
  return (
    <Divider style={CustomStyle} />
  )
}

export default CustomDivider