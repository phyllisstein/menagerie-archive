import { AdobeClean, AdobeCleanSerif } from 'styles/fonts'
import { Navigate, Route, Routes } from 'react-router'
import { ApprovalMatrix } from 'routes/approval-matrix'
import avatarFB from 'assets/avatar-fb.jpg'
import avatarTW from 'assets/avatar-tw.jpg'
import { Body } from 'styles/global'
import faviconPNG from 'assets/favicon.png'
import { Helmet } from 'react-helmet-async'
import { Kyar } from 'routes/kyar'
import type { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'
import { theme } from 'styles/theme'
import { ThemeProvider } from 'styled-components'

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

export function App(): ReactElement {
  return (
    <RecoilRoot>
      <ThemeProvider theme={ theme }>
        <Body />

        <AdobeClean />
        <AdobeCleanSerif />

        <Helmet defaultTitle={ SITE_NAME } titleTemplate={ `%s | ${ SITE_NAME }` }>
          <html
            className='spectrum spectrum--dark spectrum--medium'
            lang='en' />

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

        <Routes>
          <Route element={ <Navigate to='1' /> } path='matrix' />
          <Route element={ <ApprovalMatrix /> } path='matrix/:step' />

          <Route element={ <Kyar /> } path='kyar' />
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  )
}
