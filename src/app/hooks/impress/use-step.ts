import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

interface StepParams {
    step?: string
}

export const useStep = (max?: number): [number, () => void, () => void] => {
    const navigate = useNavigate()
    const params = useParams() as StepParams
    const step = params.step != null ? Number.parseInt(params.step) : 1

    useEffect(() => {
        if (params.step == null) {
            navigate('1')
        } else if (max != null && step > max) {
            navigate('../1')
        } else if (max != null && step < 1) {
            navigate(`../${max}`)
        }
    }, [params.step, step])

    const nextPath = params.step != null ? `../${step + 1}` : `${step}`
    const previousPath = params.step != null ? `../${step - 1}` : `../'${max ?? ''}`

    const next = useCallback(() => navigate(nextPath), [nextPath])
    const previous = useCallback(() => navigate(previousPath), [previousPath])

    return [step, previous, next]
}
