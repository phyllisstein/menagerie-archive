import { Controls, Impress, Layout, Step } from 'app/components/impress'
import { StepWrapper } from './approval-matrix-styles'

export const ApprovalMatrix = () => {
    return (
        <>
            <Impress height={ 768 } width={ 1024 }>
                <Step>
                    <StepWrapper>
                        <h1>One</h1>
                    </StepWrapper>
                </Step>
                <Step position={{ x: 1000 }}>
                    <StepWrapper>
                        <h1>Two</h1>
                    </StepWrapper>
                </Step>
                <Step relative position={{ x: 1000 }}>
                    <StepWrapper>
                        <h1>Three</h1>
                    </StepWrapper>
                </Step>
                <Step relative position={{ x: -500 }} scale={ 2 }>
                    <StepWrapper>
                        <h1>Four</h1>
                    </StepWrapper>
                </Step>
                <Step rotation={{ z: 45 }}>
                    <StepWrapper>
                        <h1>Five</h1>
                    </StepWrapper>
                </Step>
                <Step rotation={{ y: 180 }}>
                    <StepWrapper>
                        <h1>Six</h1>
                    </StepWrapper>
                </Step>
            </Impress>
            <Controls />
        </>
    )
}
