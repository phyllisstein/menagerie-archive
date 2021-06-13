import { Graf } from '../markup'
import { ReactChild, ReactElement, useEffect, useState } from 'react'
import { Inferior } from './inferior'
import { Superior } from './superior'
import { animated, useSpring } from 'react-spring'

interface Props {
  children: ReactChild
}

export function Palimpsest ({ children }: Props): ReactElement {
  const [offset, setOffset] = useState(0)

  const { left } = useSpring({
    left: offset,
  })

  return (
    <div>
      <button onClick={ () => setOffset(o => o - 100) }>←</button>
      <button onClick={ () => setOffset(o => o + 100) }>→</button>
      <div style={{ position: 'relative', fontSize: '18px' }}>
        <animated.span style={{ position: 'absolute', left }}>
          The presence that
        </animated.span>{ ' ' }
        <animated.span style={{ marginLeft: left.to(l => l + 138) }}>
          rose
        </animated.span>{ ' ' }
        thus so strangely beside the waters, is expressive of what in the ways
        of a thousand years men had come to desire. Hers is the head upon which
        all “the ends of the world are come,” and the eyelids are a little
        weary. It is a beauty wrought out from within upon the flesh, the
        deposit, little cell by cell of strange thoughts and fantastic reveries
        and exquisite passions. Set it for a moment beside one of those white
        Greek goddesses or beautiful women of antiquity, and how would they be
        troubled by this beauty, into which the soul with all its maladies has
        passed! All the thoughts and experience of the world have etched and
        moulded there, in that which they have the power to refine and make
        expressive of the outward form, the animalism of Greece, the lust of
        Rome, the mysticism of the middle age with its spiritual ambition and
        imaginative loves, the return of the Pagan world, the sins of the
        Borgias.
      </div>
    </div>
  )
}
