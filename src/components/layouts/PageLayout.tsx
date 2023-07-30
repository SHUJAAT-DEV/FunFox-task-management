import { ReactNode } from "react";
import { AiOutlineLogout } from "react-icons/ai";

type PageLayoutProperties ={
children?:ReactNode,
title:string,
handleLogOut:()=>void

}

function PageLayout({children,title, handleLogOut}:PageLayoutProperties) {
    return (
        <div className='container'> 
        <span onClick={handleLogOut}><AiOutlineLogout /></span>
        <h1> {title}</h1>

        {children}
            
        </div>
    );
}

export default PageLayout;