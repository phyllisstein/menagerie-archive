import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { CenteringShim, CenterTextSlide, Slide, Title, TitleWrapper, Wrapper } from './boundaries-styles'

import { H } from 'components/markup'
import { Scene, Stage, Transform } from 'components/stage'

export function BoundariesTalk () {
  const [step, setStep] = useState(1)

  // FIXME: This is an ugly way of counting and transitioning between slides.
  const toggleCurrentStep = useCallback(
    clickableStep => {
      return () => {
        if (clickableStep === step || typeof clickableStep !== 'number') {
          setStep(1)
          return
        }

        setStep(clickableStep)
      }
    },
    [step],
  )

  return (
    <Wrapper>
      <Helmet>
        <title>
          Boundaries for Fun and Prophet
        </title>
      </Helmet>
      <Stage height={ 1280 } step={ step } width={ 1280 }>
        <Scene onClick={ toggleCurrentStep(2) }>
          <CenterTextSlide>
            <CenteringShim />
            <TitleWrapper>
              <Title accent size={ 1 }>
                You did the thing!
              </Title>
              <Title size={ 3 }>
                Daniel P. Shannon<br />
                Vox Media Product JS Guild<br />
                13 April 2022
              </Title>
            </TitleWrapper>
          </CenterTextSlide>
        </Scene>
        <Scene onClick={ toggleCurrentStep(3) }>
          <Transform x={ 2048 } />
          <CenterTextSlide>
            <CenteringShim />
            <TitleWrapper>
              <Title size={ 1 }>
                What is the problem?
              </Title>
              <Title size={ 3 }>
                The problem is that we have to do things that we don’t want to do.
              </Title>
            </TitleWrapper>
          </CenterTextSlide>
        </Scene>
      </Stage>

    </Wrapper>
  )
}
