import _ from 'lodash'
import { FunctionComponent, useEffect, useMemo, useRef } from 'react'

import { Bar, Circle, Ellipse, Root, SVG } from './colors-styles'
import { Packer, nodeTestFunction } from './packer'
import { COLORS_RGB } from './palette'

const getGridItems = (elementCount: number) => []

export const Divided: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current?.getContext('2d')
    if (!canvas) return

    const rootNode = nodeTestFunction()
    for (const block of rootNode) {
      const color = _.sample(Object.entries(COLORS_RGB))
      canvas.fillStyle = color![1]
      console.log({ block, color: color![0] })
      canvas.fillRect(block.x, block.y, block.width, block.height)
    }
  }, [])

  return (
    <>
      <Root>
        <canvas ref={ canvasRef } />
      </Root>
    </>
  )
}
