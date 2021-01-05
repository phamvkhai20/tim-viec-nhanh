import React, { useState } from 'react'
import Sidebar from '../../../components/Common/Base/Sidebar'
import Header from '../../../components/Common/Base/Header'
import Footer from '../../../components/Common/Base/Footer'
function CommonLayout(props) {
    const [isActiveSidebarMenu, setIsActiveSidebarMenu] = useState(false)
    return (
        <div className={isActiveSidebarMenu?"g-sidenav-show nav-open g-sidenav-pinned":"g-sidenav-show g-sidenav-hidden"} >
            <Sidebar />
            <div class="main-content" id="panel">
            <Header  setIsActiveSidebarMenu={setIsActiveSidebarMenu} isActiveSidebarMenu={isActiveSidebarMenu}/>
            <div onClick={()=>setIsActiveSidebarMenu(false)}>
            {props.children}
            </div>
            <Footer />
            </div>
            
        </div>
    )
}

export default CommonLayout
