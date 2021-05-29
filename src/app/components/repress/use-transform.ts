type TransformFunction = (...args: any[]) => string
type Transform = Array<TransformFunction | string>

export function useTransform(...transforms: Transform[]): TransformFunction {
}
