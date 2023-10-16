import './Footer.css'
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'

const Footer = () => {

    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <footer>
            {language === "english" && (
                <p>Nacho Sansón @ 2023. All rights reserved</p>
            )}
            {language === "spanish" && (
                <p>Nacho Sansón @ 2023. Todos los derechos reservados</p>
            )}

        </footer>
    )
}
export default Footer