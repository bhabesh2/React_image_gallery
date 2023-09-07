
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { SinglePhoto } from "../Pages/SinglePhoto" // Corrected import path

export const CustomRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<SinglePhoto />} />
        </Routes>
    )
}
