import { Routes, Route } from 'react-router-dom'
import HomePage from './../Pages/HomePage/HomePage'
import FloorIsLava from '../pages/FloorIsLavaPage/FloorIsLavaPage'
import BoardMaster from '../pages/BoardMasterPage/BoardMasterPage'
import JamLink from '../pages/JamLinkPage/JamLinkPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/floor-is-lava'} element={<FloorIsLava />} />
            <Route path={'/boardmaster'} element={<BoardMaster />} />
            <Route path={'/jamlink'} element={<JamLink />} />

        </Routes>
    )
}

export default AppRoutes