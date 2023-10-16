import { Routes, Route } from 'react-router-dom'
import HomePage from './../Pages/HomePage/HomePage'
import FloorIsLava from './../Pages/FloorIsLavaPage/FloorIsLavaPage'
import BoardMaster from './../Pages/BoardMasterPage/BoardMasterPage'
import JamLink from './../Pages/JamLinkPage/JamLinkPage'


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