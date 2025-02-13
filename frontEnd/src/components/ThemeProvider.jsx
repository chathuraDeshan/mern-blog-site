
import {useSelector} from 'react-redux'

const ThemeProvider = ({children}) => {
    const {theme} = useSelector(state => state.theme)
  return (
    <div className={theme}>
        <div className='bg-white text-gray-950 dark:text-white dark:bg-gray-800'>
        {children}
        </div>
    </div>
  )
}

export default ThemeProvider