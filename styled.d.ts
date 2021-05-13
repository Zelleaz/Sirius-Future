import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            blue: string
            black: string
            yellow: string
            purple: string
        }
    }
}