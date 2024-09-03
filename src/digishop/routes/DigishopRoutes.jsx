import { Routes, Route, Navigate } from "react-router-dom"
import { DigishopPage } from "../pages/DigishopPage"

export const DigishopRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DigishopPage />}/>

            <Route path="/*" element={ <Navigate to="/"/>} />
        </Routes>
    )
}