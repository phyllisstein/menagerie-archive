import { Scene, Stage } from 'app/components'
import { js } from 'app/styles/theme/palette'
import _ from 'lodash'
import R from 'ramda'

const getSolid = R.pipe(
  _.partial(_.filter, _, (_value, key) => key.includes('400')),
  _.sample,
  c => c.alpha(0.33).css(),
)

export function StageSandboxRoute() {
  const backgroundColor = getSolid(js)

  console.log(backgroundColor)

  return (
    <Stage step={ 0 }>
      <Scene translateX='250px'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          250px
        </div>
      </Scene>
      <Scene scale='0.5' translateX='500px'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          500px + 2×
        </div>
      </Scene>
      <Scene rotateY='98deg'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          98°
        </div>
      </Scene>
    </Stage>
  )
}
