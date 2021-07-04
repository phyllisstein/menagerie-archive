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

  if (module.hot != null) {
    module.hot.accept(async (): Promise<void> => {
      const { App } = await import('app/routes')

      await new Promise<void>(resolve => {
        ReactDOM.render(
          <BrowserRouter>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </BrowserRouter>,
          main,
          resolve,
        )
      })
    })
  }

  await new Promise<void>(resolve => {
    ReactDOM.render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>,
      main,
      resolve,
    )
  })
}

const bootstrapHyphenopoly = async (): Promise<void> => {
  await Promise.all([
    import('hyphenopoly/patterns/en-us.wasm'),
    import('hyphenopoly/Hyphenopoly_Loader.js'),
    import('hyphenopoly/Hyphenopoly.js'),
  ])

  await new Promise((resolve, reject) => {
    window.Hyphenopoly = {
      paths: {
        maindir: '/vendor/hyphenopoly/',
        patterndir: '/vendor/hyphenopoly/',
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
    }

    try {
      const scpt = document.createElement('script')
      scpt.async = true
      scpt.defer = true
      scpt.src = '/vendor/hyphenopoly/Hyphenopoly_Loader.js'
      scpt.setAttribute('crossorigin', 'anonymous')
      scpt.onload = resolve
      document.body.appendChild(scpt)
    } catch (err) {
      reject(err)
    }
  })
}

const bootstrap = async (): Promise<void> => {
  await bootstrapHyphenopoly()
  await renderApp()
}

export default bootstrap
