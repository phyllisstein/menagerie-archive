import { Route, Routes } from 'react-router-dom'
import avatarFB from 'assets/avatar-fb.jpg'
import avatarTW from 'assets/avatar-tw.jpg'
import { Body } from 'app/styles/global'
import faviconPNG from 'assets/favicon.png'
import { Helmet } from 'react-helmet-async'
import loadable from '@loadable/component'
import { RecoilRoot } from 'recoil'
import theme from 'app/styles/theme'
import { ThemeProvider } from 'styled-components'

const SITE_NAME = 'An Evening With Daniel P. Shannon'

const DESCRIPTION = 'Talks and performances.'

const KEYWORDS = [
  'digital media',
  'software',
  'software architecture',
  'software engineering',
  'talks',
  'tech talks',
  'web development',
]

const AsyncRoute = loadable(async props => {
  const mod = await import(`app/routes/${ props.name }`)
  return mod.default
})

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={ theme }>
        <>
          <Body />
          <Helmet defaultTitle={ SITE_NAME } titleTemplate={ `%s | ${ SITE_NAME }` }>
            <html lang='en' />

            <meta charSet='utf-8' />
            <meta content='width=device-width, initial-scale=1, shrink-to-fit=no' name='viewport' />

            { /* Common Metadata */ }
            <meta content={ DESCRIPTION } name='description' />
            <meta content={ KEYWORDS.join(',') } name='keywords' />

            { /* Facebook OpenGraph */ }
            <meta content={ DESCRIPTION } property='og:description' />
            <meta content={ avatarFB } property='og:image' />
            <meta content='en_US' property='og:locale' />
            <meta content={ SITE_NAME } property='og:site_name' />
            <meta content='website' property='og:type' />

            { /* Twitter Cards */ }
            <meta content='summary' name='twitter:card' />
            <meta content={ DESCRIPTION } property='twitter:description' />
            <meta content='on' name='twitter:dnt' />
            <meta content={ avatarTW } property='twitter:image' />
            <meta content='@phyllisstein' name='twitter:site' />
            <meta content={ SITE_NAME } property='twitter:title' />

            { /* Favicon */ }
            <link href={ faviconPNG } rel='icon' sizes='192x192' />
          </Helmet>
          <Routes>
            <Route element={ <AsyncRoute name='style' /> } path='style' />
            <Route element={ <AsyncRoute name='style' /> } path='style/:step' />
          </Routes>
        </>
      </ThemeProvider>
    </RecoilRoot>
  )
}
