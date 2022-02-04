import _ from 'lodash'
import { FunctionComponent, useEffect, useMemo, useRef } from 'react'

import { Bar, Circle, Ellipse, Root, SVG } from './colors-styles'
import { pack } from './packer-fun'
import { COLORS_RGB } from './palette'

const getGridItems = (elementCount: number) => []

export const Divided: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current?.getContext('2d')
    if (!canvas) return

    const rootNode = pack(512, 256)
    console.log(rootNode)
  }, [])

  return (
    <>
      <Root>
        <canvas ref={ canvasRef } />
      </Root>
    </>
  )
}
