import { ReactElement, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router'
import { RecoilRoot } from 'recoil'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import avatarFB from '~/assets/avatar-fb.jpg'
import avatarTW from '~/assets/avatar-tw.jpg'
import faviconPNG from '~/assets/favicon.png'
import { AdobeClean, AdobeCleanSerif, MillerDisplay } from '~/assets/fonts'
import MatrixRoutes from '~/routes/matrix'
import SandboxRoutes from '~/routes/sandbox'
import SundayRoutes from '~/routes/sunday'
import { Body, Reboot } from '~/styles/global'
import { theme } from '~/styles/theme'

const SITE_NAME = 'An Evening With…'

const DESCRIPTION = 'Talks and performances with Daniel P. Shannon'

const KEYWORDS = [
  'digital media',
  'software',
  'software architecture',
  'software engineering',
  'talks',
  'tech talks',
  'web development',
]

export function App (): ReactElement {
  return (
    <RecoilRoot>
      <StyleSheetManager disableVendorPrefixes>
        <ThemeProvider theme={ theme }>
          <Reboot />
          <Body />
          <AdobeClean />
          <AdobeCleanSerif />
          <MillerDisplay />

          <Helmet defaultTitle={ SITE_NAME } titleTemplate={ `${ SITE_NAME } %s` }>
            <html lang='en-us' />
            <body className='spectrum spectrum--light spectrum--medium' />
            <meta charSet='utf-8' />
            <meta
              content='width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no'
              name='viewport' />
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

          <Suspense fallback='...'>
            <Routes>
              <Route element={ <MatrixRoutes /> } path='matrix/*' />
              <Route element={ <SandboxRoutes /> } path='sandbox/*' />
              <Route element={ <SundayRoutes /> } path='sunday/*' />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </StyleSheetManager>
    </RecoilRoot>
  )
}