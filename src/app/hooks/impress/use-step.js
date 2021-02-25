import { useCallback, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'

export const useStep = max => {
    const navigate = useNavigate()
    const params = useParams()
    const step = params.step != null ? Number.parseInt(params.step, 10) : 1

    useEffect(() => {
        if (params.step == null) {
            navigate('1', { replace: true })
        } else if (step > max) {
            navigate('../1')
        } else if (step < 1) {
            navigate(`../${ max }`)
        }
    }, [params.step, step])

    const nextPath = `../${ step + 1 }`
    const previousPath = `../${ step - 1 }`

    const next = useCallback(() => navigate(nextPath), [nextPath])
    const previous = useCallback(() => navigate(previousPath), [previousPath])

    return [step, previous, next]
}
