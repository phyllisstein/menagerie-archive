import { ReactChild, ReactElement, useCallback, useState } from 'react'
import { animated, useSpring } from 'react-spring'

interface Props {
  children: ReactChild
}

export function Palimpsest ({ children }: Props): ReactElement {
  const [offset, setOffset] = useState(0)
  const [sentenceStart, setSentenceStart] = useState('The presence that')
  const [sentenceEnd, setSentenceEnd] = useState(
    'rose thus so strangely beside the waters, is expressive of what in the ways of a thousand years men had come to desire.',
  )

  const wordRight = useCallback(() => {
    const start = sentenceStart.split(' ')
    const startTail = start.pop()
    const end = `${ startTail } ${ sentenceEnd }`

    setSentenceStart(start.join(' '))
    setSentenceEnd(end)
  }, [sentenceStart, sentenceEnd])

  const wordLeft = useCallback(() => {
    const [endHead, ...endTail] = sentenceEnd.split(' ')
    const start = `${ sentenceStart } ${ endHead }`
    const end = endTail.join(' ')

    setSentenceStart(start)
    setSentenceEnd(end)
  }, [sentenceStart, sentenceEnd])

  const { left } = useSpring({
    left: offset,
  })

  return (
    <div>
      <button onClick={ () => setOffset(o => o - 100) }>←</button>
      <button onClick={ () => setOffset(o => o + 100) }>→</button>
      <button onClick={ wordLeft }>-</button>
      <button onClick={ wordRight }>+</button>
      <div style={{ position: 'relative', fontSize: '18px' }}>
        <animated.span style={{ position: 'absolute', left }}>
          { sentenceStart }
        </animated.span>{ ' ' }
        <animated.span style={{ marginLeft: left.to(l => l + 138) }}>
          { sentenceEnd }
        </animated.span>{ ' ' }
        <animated.span>
          Hers is the head upon which all “the ends of the world are come,” and
          the eyelids are a little weary. It is a beauty wrought out from within
          upon the flesh, the deposit, little cell by cell of strange thoughts
          and fantastic reveries and exquisite passions. Set it for a moment
          beside one of those white Greek goddesses or beautiful women of
          antiquity, and how would they be troubled by this beauty, into which
          the soul with all its maladies has passed! All the thoughts and
          experience of the world have etched and moulded there, in that which
          they have the power to refine and make expressive of the outward form,
          the animalism of Greece, the lust of Rome, the mysticism of the middle
          age with its spiritual ambition and imaginative loves, the return of
          the Pagan world, the sins of the Borgias.
        </animated.span>
      </div>
    </div>
  )
}
