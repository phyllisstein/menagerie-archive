import 'normalize.css'

const loadCSS = async () => {
    await Promise.all([
        import('fonts/miller-text/index.css'),
        import('fonts/miller-display/index.css'),
        import('fonts/egyptienne/index.css'),
    ])
}

const loadGSAP = async () => {
    const {gsap} = await import('gsap')

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

const renderApp = async () => {
    const [
        {App},
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

const bootstrap = () => Promise.all([loadCSS(), loadGSAP(), renderApp()])

export default bootstrap
