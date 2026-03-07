import type { HTMLMotionProps } from 'framer-motion'

export const externalProps: Readonly<Pick<HTMLMotionProps<'a'>, 'target' | 'rel'>> = {
    target: '_blank',
    rel: 'noopener noreferrer'
}