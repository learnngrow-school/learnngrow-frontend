import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import "./userLayout.css"

interface IProps {
    children?: React.ReactNode
}

const UserLayout = ({ children }: IProps) => {

    return (
        <div className="layout-user">
            <div className="container">
                <div className="menu">
                     <Menu />
                </div>
                <div className="user-content">
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Outlet context={children}/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default UserLayout;