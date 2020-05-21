import { Body, Canvas, Root } from './impress-styles'
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react'
import { config, interpolate, useSpring } from 'react-spring'
import _ from 'lodash'
import { addEventListener } from 'consolidated-events'
import { canUseDOM } from 'exenv'
import { decelerationEase } from 'app/lib/ease'
import { oneLine } from 'common-tags'
import R from 'ramda'
import { useNavigate } from 'react-router'

const clamp = (min, max, i) => {
    if (i > max) {
        return clamp(min, max, i - max)
    }

    if (i < min) {
        return clamp(min, max, i + max)
    }

    return i
}

const clampRotation = R.partial(clamp, [0, 360])

const getWindowScale = (height, width, scaleConstraints) => {
    if (!canUseDOM) {
        return 1
    }

    const scaleHeight = window.innerHeight / height
    const scaleWidth = window.innerWidth / width
    const scaleWindow = scaleHeight > scaleWidth ? scaleWidth : scaleHeight

    if (scaleConstraints.max != null && scaleWindow > scaleConstraints.max) {
        return scaleConstraints.max
    }

    if (scaleConstraints.min != null && scaleWindow < scaleConstraints.min) {
        return scaleConstraints.min
    }

    return scaleWindow
}

export const Impress = ({ children, delay = 350, height, perspective = 1000, scale: scaleConstraints = {}, spring: springConfig = config.gentle, step, width }) => {
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 })
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
    const [scale, setScale] = useState(1)
    const lastScale = useRef(scale)
    const childCount = Children.count(children)

    const navigate = useNavigate()

    useEffect(() => {
        if (step < 1) {
            navigate(`../${ childCount }`)
        } else if (step > childCount) {
            navigate('../1')
        }
    })

    const positionedSteps = useMemo(() => {
        const cachedPosition = { x: 0, y: 0, z: 0 }
        const cachedRotation = { x: 0, y: 0, z: 0 }
        let cachedScale = 1

        return Children.map(children, (child, i) => {
            const isCurrent = i + 1 === step

            const {
                position: currentPosition,
                relativePosition,
                relativeRotation,
                relativeScale,
                rotation: currentRotation,
                scale: currentScale,
                ...props
            } = child.props

            if (currentPosition == null && relativePosition != null) {
                cachedPosition.x = cachedPosition.x + (relativePosition?.x ?? 0)
                cachedPosition.y = cachedPosition.y + (relativePosition?.y ?? 0)
                cachedPosition.z = cachedPosition.z + (relativePosition?.z ?? 0)
            } else {
                cachedPosition.x = currentPosition?.x ?? 0
                cachedPosition.y = currentPosition?.y ?? 0
                cachedPosition.z = currentPosition?.z ?? 0
            }

            if (typeof currentRotation === 'number') {
                cachedRotation.x = 0
                cachedRotation.y = 0
                cachedRotation.z = currentRotation
            } else if (currentRotation == null && typeof relativeRotation === 'number') {
                cachedRotation.x = 0
                cachedRotation.y = 0
                cachedRotation.z = clampRotation((cachedRotation.z ?? 0) + relativeRotation)
            } else if (currentRotation == null && relativeRotation != null) {
                cachedRotation.x = clampRotation((cachedRotation.x ?? 0) + (relativeRotation?.x ?? 0))
                cachedRotation.y = clampRotation((cachedRotation.y ?? 0) + (relativeRotation?.y ?? 0))
                cachedRotation.z = clampRotation((cachedRotation.z ?? 0) + (relativeRotation?.z ?? 0))
            } else {
                cachedRotation.x = currentRotation?.x ?? 0
                cachedRotation.y = currentRotation?.y ?? 0
                cachedRotation.z = currentRotation?.z ?? 0
            }

            if (currentScale == null && relativeScale != null) {
                cachedScale = (cachedScale ?? 1) * relativeScale
            } else {
                cachedScale = currentScale ?? 1
            }

            if (isCurrent) {
                setPosition({ ...cachedPosition })
                setRotation({ ...cachedRotation })
                setScale(cachedScale)
            }

            const transform = oneLine`
        translate(-50%, -50%)
        translate3d(${ cachedPosition.x }px, ${ cachedPosition.y }px, ${ cachedPosition.z }px)
        rotateX(${ cachedRotation.x }deg)
        rotateY(${ cachedRotation.y }deg)
        rotateZ(${ cachedRotation.z }deg)
        scale(${ cachedScale })
      `
            const style = {
                ...props.style,
                position: 'absolute',
                transform,
                transformStyle: 'preserve-3d',
            }

            return cloneElement(child, {
                active: isCurrent,
                style,
            })
        })
    }, [children, step])

    const initialWindowScale = getWindowScale(height, width, scaleConstraints)

    const [rootAnimation, setRootAnimation] = useSpring(() => ({
        config: {
            ...springConfig,
            easing: decelerationEase,
        },
        from: {
            perspective: perspective / initialWindowScale,
            scale: initialWindowScale,
        },
    }))

    const [canvasAnimation, setCanvasAnimation] = useSpring(() => ({
        config: {
            ...springConfig,
            easing: decelerationEase,
        },
        from: {
            position: [0, 0, 0],
            rotation: [0, 0, 0],
        },
    }))

    useEffect(() => {
        const animate = () => {
            const windowScale = getWindowScale(height, width, scaleConstraints)

            const targetPosition = R.map(R.multiply(-1), position)
            const targetRotation = R.map(R.multiply(-1), rotation)

            let targetScale = 1 / scale
            const zoom = targetScale >= lastScale.current
            lastScale.current = targetScale
            targetScale *= windowScale

            setRootAnimation({
                delay: zoom ? delay : 0,
                to: {
                    perspective: perspective / targetScale,
                    scale: targetScale,
                },
            })

            setCanvasAnimation({
                delay: zoom ? 0 : delay,
                to: {
                    position: [targetPosition.x, targetPosition.y, targetPosition.z],
                    rotation: [targetRotation.x, targetRotation.y, targetRotation.z],
                },
            })
        }

        animate()

        return addEventListener(window, 'resize', _.debounce(animate, 50), { passive: true })
    }, [delay, height, perspective, position, rotation, scale, scaleConstraints, setCanvasAnimation, setRootAnimation, width])

    return (
        <>
            <Body />
            <Root
                style={
                    {
                        perspective: rootAnimation.perspective,
                        transform: rootAnimation.scale.interpolate(s => `scale(${ s })`),
                    }
                }>
                <Canvas
                    style={
                        {
                            transform: interpolate(
                                [canvasAnimation.position, canvasAnimation.rotation],
                                ([x, y, z], [rotateX, rotateY, rotateZ]) => oneLine`
                rotateZ(${ rotateZ }deg)
                rotateY(${ rotateY }deg)
                rotateX(${ rotateX }deg)
                translate3d(${ x }px, ${ y }px, ${ z }px)
              `,
                            ),
                        }
                    }>
                    { positionedSteps }
                </Canvas>
            </Root>
        </>
    )
}
