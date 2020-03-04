/* eslint-disable @typescript-eslint/no-floating-promises */

import 'normalize.css'
import pAll from 'p-all'

const loadGSAP = async (): Promise<void> => {
  const { gsap } = await import('gsap')

  // Complex: 375ms
  // Entering: 225ms
  // Exiting: 195ms
  gsap.registerEase('material-standard', gsap.parseEase('.4,0,.2,1'))
  gsap.registerEase('material-deceleration', gsap.parseEase('0,0,.2,.1'))
  gsap.registerEase('material-acceleration', gsap.parseEase('.4,0,1,1'))
  gsap.registerEase('material-sharp', gsap.parseEase('.4,0,.6,1'))
  gsap.registerEase('material-swift-ease-in-out', gsap.parseEase('.35,0,.25,1')) // 500ms
  gsap.registerEase('material-swift-ease-out', gsap.parseEase('.25,.8,.25,1')) // 400ms
  gsap.registerEase('material-swift-ease-in', gsap.parseEase('.55,0,.55,.2')) // 300ms
}

const renderApp = async (): Promise<void> => {
  const [
    { App },
    { BrowserRouter },
    React,
    ReactDOM,
  ] = await pAll([
    () => import('app'),
    () => import('react-router-dom'),
    () => import('react'),
    () => import('react-dom'),
  ])

  let main = document.querySelector('main')
  if (!main) {
    main = document.createElement('main')
    document.body.appendChild(main)
  }

  const reactRoot = ReactDOM.createRoot(main)
  reactRoot.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )

  if (module.hot) {
    module.hot.accept('app', () => {
      const { App } = require('app')

      reactRoot.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      )
    })
  }
}

const bootstrap = (): Promise<void[]> => Promise.all([loadGSAP(), renderApp()])

export default bootstrap
