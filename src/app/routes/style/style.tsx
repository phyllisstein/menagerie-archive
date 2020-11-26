import { Impress, Step } from 'app/components/impress'
import { FunctionComponent } from 'react'

export const Style: FunctionComponent = () => {
    return (
        <Impress height={ 768 } width={ 1024 }>
            <Step>
                <h1>One</h1>
            </Step>
            <Step position={{ x: 1000 }}>
                <h1>Two</h1>
            </Step>
            <Step relative position={{ x: 1000 }}>
                <h1>Three</h1>
            </Step>
            <Step relative position={{ x: -500 }} scale={ 2 }>
                <h1>Four</h1>
            </Step>
        </Impress>
    )
}
