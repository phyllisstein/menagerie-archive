import { Body, Canvas, Root } from './impress-styles'
import { Children, cloneElement, useEffect, useState } from 'react'
import { addEventListener } from 'consolidated-events'
import { canUseDOM } from 'exenv'
import { impress } from 'app/state'
import R from 'ramda'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

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

export const Impress = ({ children, height, perspective = 1000, scale: scaleConstraints = {}, step, width }) => {
    const childCount = Children.count(children)
    const [scale, setScale] = useState(() => getWindowScale(height, width, scaleConstraints))

    const navigate = useNavigate()

    useEffect(() => {
        if (step < 1) {
            navigate(`../${ childCount }`)
        } else if (step > childCount) {
            navigate('../1')
        }
    })

    const steppedChildren = Children.map(children, (child, index) => {
        return cloneElement(child, {
            active: index + 1 === step,
            step: index + 1,
        })
    })

    const previousAnimation = useRecoilValue(impress.animation(step - 1))
    const currentAnimation = useRecoilValue(impress.animation(step))

    const targetPosition = R.map(R.multiply(-1), currentAnimation.position)
    const targetRotation = R.map(R.multiply(-1), currentAnimation.rotation)

    useEffect(() => {
        const getScale = () => {
            const nextScale = getWindowScale(height, width, scaleConstraints)
            if (nextScale !== scale) {
                setScale(nextScale)
            }
        }
        getScale()
        return addEventListener(window, 'resize', getScale, { passive: true })
    })

    let targetScale = 1 / currentAnimation.scale
    const zoom = targetScale >= previousAnimation.scale
    targetScale *= scale

    return (
        <>
            <Body />
            <Root
                animate={{
                    perspective: perspective / targetScale,
                    scale: targetScale,
                }}
                initial={{
                    perspective: perspective / scale,
                    scale: scale,
                }}
                transition={{
                    delay: zoom ? 0.5 : 0,
                    duration: 1,
                    ease: [0.4, 0, 0.2, 1],
                    type: 'tween',
                }}>
                <Canvas
                    animate={{
                        rotateX: targetRotation.x,
                        rotateY: targetRotation.y,
                        rotateZ: targetRotation.z,
                        x: targetPosition.x,
                        y: targetPosition.y,
                        z: targetPosition.z,
                    }}
                    initial={{
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        x: 0,
                        y: 0,
                        z: 0,
                    }}
                    transformTemplate={ ({ rotateX, rotateY, rotateZ, x, y, z }) => `translate3d(${ x }, ${ y }, ${ z }) rotateZ(${ rotateZ }) rotateY(${ rotateY }) rotateX(${ rotateX })` }
                    transition={{
                        delay: zoom ? 0 : 0.5,
                        duration: 1,
                        ease: [0.4, 0, 0.2, 1],
                        type: 'tween',
                    }}>
                    { steppedChildren }
                </Canvas>
            </Root>
        </>
    )
}
