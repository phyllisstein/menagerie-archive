import { Impress, Layout, Step } from 'app/components/impress'

export const ApprovalMatrix = () => {
    return (
        <>
            <Impress height={ 768 } width={ 768 }>
                <Layout>
                    <div style={{ backgroundColor: '#000', display: 'block', height: 2, width: 768 }} />
                </Layout>
                <Step position={{ z: 1024 }} scale={ 2 }>
                    <h1>One (Step)</h1>
                </Step>
                <Layout>
                    <h1>Two (Layout)</h1>
                </Layout>
                <Step position={{ x: 1024 }}>
                    <h1>Two (Step)</h1>
                </Step>
            </Impress>
        </>
    )
}
