import { Outlet, Link, useLocation } from "react-router-dom";


export default function ItemsLayout(){
    const { pathname } = useLocation()
    return (
        <main>
            <h2>Stock item</h2>
            <div className="tabs">
                <Link 
                to="/items"
                className={`tab ${pathname === "/items" ? "active" : ""}`}
                >Todos os itens</Link>
                <Link
                to="/items/new"
                className={`tab ${pathname === "/items/new" ? "active" : ""}`}
                >Novo item</Link>
            </div>
            <Outlet />
        </main>
    )
}