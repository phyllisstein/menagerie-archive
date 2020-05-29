import 'normalize.css'

const loadCSS = async () => {
  await Promise.all([
    import('fonts/miller-text/index.css'),
    import('fonts/miller-display/index.css'),
    import('fonts/egyptienne/index.css'),
  ])
}

const renderApp = async () => {
  const [
    {default: App},
    {BrowserRouter},
    {HelmetProvider},
  ] = await Promise.all([
    import('app'),
    import('react-router-dom'),
    import('react-helmet-async'),
  ])

  const main = document.querySelector('main')
  const reactRoot = ReactDOM.unstable_createRoot(main)

  reactRoot.render(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
  )

  if (module.hot) {
    module.hot.accept('app', () => {
      const {App} = require('app')

      reactRoot.render(
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>,
      )
    })
  }
}

const bootstrap = () => Promise.all([loadCSS(), renderApp()])

export default bootstrap
