const renderApp = async () => {
  const [
    { App },
    { BrowserRouter },
    { HelmetProvider },
    { default: ReactDOM }
  ] = await Promise.all([
    import('app/routes'),
    import('react-router-dom'),
    import('react-helmet-async'),
    import('react-dom')
  ])

  const main = document.querySelector('main')

  ReactDOM.render(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    main
  )

  if (module.hot != null) {
    module.hot.accept(async () => {
      const { App } = await import('app/routes')

      ReactDOM.render(
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>,
        main
      )
    })
  }
}

const bootstrap = async () => await Promise.all([renderApp()])

export default bootstrap
