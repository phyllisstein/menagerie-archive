import { ReactElement, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router'
import { RecoilRoot } from 'recoil'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { Preflight } from 'styled-preflight'

import avatarFB from 'assets/avatar-fb.jpg'
import avatarTW from 'assets/avatar-tw.jpg'
import faviconPNG from 'assets/favicon.png'
import { AdobeClean, AdobeCleanSerif, MillerDisplay } from 'assets/fonts'
import AOCRoutes from 'routes/aoc'
import MatrixRoutes from 'routes/matrix'
import PalimpsestRoutes from 'routes/palimpsest'
import ParallaxRoutes from 'routes/parallax'
import SundayRoutes from 'routes/sunday'
import SwoopRoutes from 'routes/swoop'
import { Body } from 'styles/global'
import { theme } from 'styles/theme'

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
          <Preflight />
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
              <Route element={ <PalimpsestRoutes /> } path='palimpsest/*' />
              <Route element={ <ParallaxRoutes /> } path='parallax/*' />
              <Route element={ <SundayRoutes /> } path='sunday/*' />
              <Route element={ <SwoopRoutes /> } path='swoop/*' />
              <Route element={ <AOCRoutes /> } path='aoc/*' />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </StyleSheetManager>
    </RecoilRoot>
  )
}
