import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DigishopRoutes } from "../digishop/routes/DigishopRoutes";


export const AppRouter = () => {
    return (
        <Routes>
            {
                <>
                <Route path="/*" element={<DigishopRoutes/>}/>
                <Route path="/auth/*" element={<AuthRoutes/>}/>
                </>
            }
            <Route path="/*" element={<Navigate to="/auth/" />}/>
        </Routes>
    )
}