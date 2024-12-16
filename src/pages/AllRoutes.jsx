import { Route, Routes } from "react-router-dom"
import routes from "../routes"

function AllRoutes() {
    return (
        <>
            <Routes>
                {
                    routes.map((item,index)=><Route key={index} path={item.path} element={item.element} />)
                }
            </Routes>
        </>
    )
}

export default AllRoutes