import './ThanksMessage.css'
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'

const thanksMessage = () => {

    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <>
            {language === "english" && (
                <p className='thanks'>THANKS FOR SCROLLING</p>
            )}
            {language === "spanish" && (
                <p className='thanks'>Gracias por su interés</p>
            )}
        </>
    )
}
export default thanksMessage