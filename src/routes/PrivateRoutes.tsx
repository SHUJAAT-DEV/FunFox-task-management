import { Navigate, Outlet } from "react-router-dom";
import useTaskStore from "../zustand/useTaskStore";
import { ReactNode } from "react";

function PrivateRoutes({ children }: { children?: ReactNode; }) {
    const { taskConfiguration: { userId } } = useTaskStore();
    return (
        <>
            {
                userId !== 0 ? (
                    <div>
                        {children || <Outlet />}
                    </div>
                ) : (
                    <Navigate to='/login' />
                )

            }
        </>

    );
}

export default PrivateRoutes;