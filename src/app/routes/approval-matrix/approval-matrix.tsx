import { Impress, Layout, Step } from 'app/components/impress'
import React, { FunctionComponent } from 'react'

export const ApprovalMatrix: FunctionComponent = () => {
  return (
    <>
      <Impress height={ 768 } width={ 768 }>
        <Layout position={{ z: 2048 }} scale={ 2 }>
          <h1>One (Layout)</h1>
        </Layout>
        <Step position={{ z: 1024 }} scale={ 2 }>
          <h1>One (Step)</h1>
        </Step>
        <Layout position={{ x: 1024, z: -1024 }} scale={ 0.5 }>
          <h1>Two (Layout)</h1>
        </Layout>
        <Step position={{ x: 1024 }}>
          <h1>Two (Step)</h1>
        </Step>
      </Impress>
    </>
  )
}
