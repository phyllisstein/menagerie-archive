/* global Hyphenopoly:false */

const renderApp = async (): Promise<void> => {
  const [
    { App },
    { BrowserRouter },
    { HelmetProvider },
    { default: ReactDOM },
  ] = await Promise.all([
    import('app/routes'),
    import('react-router-dom'),
    import('react-helmet-async'),
    import('react-dom'),
  ])

  const main = document.querySelector('main')
  const root = ReactDOM.createRoot(main)

  await new Promise<void>(() => {
    root.render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>,
    )
  })
}

const bootstrapHyphenopoly = async (): Promise<void> => {
  await new Promise((resolve, reject) => {
    const scpt = document.createElement('script')
    scpt.src = '/hyphenopoly/Hyphenopoly_Loader.js'
    scpt.setAttribute('crossorigin', 'anonymous')
    scpt.onload = resolve
    scpt.onerror = reject
    document.head.appendChild(scpt)
  })

  Hyphenopoly.config({
    paths: {
      maindir: '/hyphenopoly/',
      patterndir: '/hyphenopoly/',
    },
    require: {
      'en-us': 'FORCEHYPHENOPOLY',
    },
    setup: {
      defaultLanguage: 'en-us',
      hide: 'false',
      keepAlive: true,
      normalize: true,
      selectors: {
        '.__default': {
          compound: 'all',
          hyphen: '\u00AD',
          minWordLength: 0,
          orphanControl: 3,
        },
      },
      timeout: 1000,
    },
  })
}

const bootstrap = async (): Promise<void> => {
  await bootstrapHyphenopoly()
  await renderApp()
}

export default bootstrap
