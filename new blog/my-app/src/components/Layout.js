import { Outlet } from "react-router-dom"
import PageHeader from "./PageHeader"


const Layout = () => {
    return (
        <>
            <PageHeader />
            <Outlet/>
        </>
    )
}

export default Layout