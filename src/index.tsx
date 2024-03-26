import "../styled-system/styles.css"
import { css } from '../styled-system/css'

export function App() {
    return <div className={css({ bg: 'red.400' })}>
        <p className={css({
            color: 'white',
            fontSize: '2xl',
            padding: "5",
            "&:hover":{
                bgColor: "blue.100"
            }
        })}>Hello World</p>
    </div>
}
