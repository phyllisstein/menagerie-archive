/* global Hyphenopoly:false */

const renderApp = async (): Promise<void> => {
  const [
    { App },
    { BrowserRouter },
    { HelmetProvider },
    { createRoot },
  ] = await Promise.all([
    import('routes'),
    import('react-router-dom'),
    import('react-helmet-async'),
    import('react-dom/client'),
  ])

  const main = document.querySelector('main')
  const root = createRoot(main)

  await new Promise<void>(() => {
    root.render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>,
    )
    return Promise.resolve()
  })

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
  }
}

const bootstrapHyphenopoly = async (): Promise<void> => {
  await new Promise((resolve, reject) => {
    const scpt = document.createElement('script')
    scpt.src = '/hyphenopoly/Hyphenopoly_Loader.js'
    scpt.setAttribute('crossorigin', 'anonymous')
    scpt.async = true
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
