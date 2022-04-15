import styled from '@emotion/styled'

import { H } from 'components/markup'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  color: ${ ({ theme }) => theme.palette.css.gray800 };

  background: ${ ({ theme }) => theme.palette.css.gray50 };
`

export const Slide = styled.section`
  position: absolute;

  display: flex;

  top: 50%;
  left: 50%;

  width: 1024px;
  height: 1024px;

  background-color: ${ ({ theme }) => theme.palette.css.gray100 };
  transform: translate(-50%, -50%);
  transform-origin: center center;

  ${ ({ theme }) => theme.typeface.accent({ fontSize: 12 }) }
`

export const CenterTextSlide = styled(Slide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const CenteringShim = styled.div`
  display: flex;
  flex: 1 0 50%;
`

export const TitleWrapper = styled.div`
  flex: 0 0 50%;
`

export const Title = styled(H)`
  text-align: center;
`
