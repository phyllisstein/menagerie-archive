import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

export const useStep = max => {
    const navigate = useNavigate()
    const params = useParams()
    const step = params.step != null ? Number.parseInt(params.step, 10) : 1

    useEffect(() => {
        if (params.step == null) {
            navigate('1')
        } else if (max != null && step > max) {
            navigate('../1')
        } else if (max != null && step < 1) {
            navigate(`../${ max }`)
        }
    }, [params.step, step, max, navigate])

    const nextPath = params.step == null ? `${ step + 1 }` : `../${ step + 1 }`
    const previousPath = params.step == null ? `${ step - 1 }` : `../${ step - 1 }`

    const next = useCallback(() => navigate(nextPath), [navigate, nextPath])
    const previous = useCallback(() => navigate(previousPath), [
        navigate,
        previousPath,
    ])

    return [step, previous, next]
}
