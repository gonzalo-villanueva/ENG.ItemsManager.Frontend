import { NavLink, Outlet } from "react-router-dom"
import { LayoutBody, NavBar } from "./Styled"

import { RiLayout4Fill } from "react-icons/ri";
import { BiNotification } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";

const navigation = [
  { name: 'Create Items', icon: RiLayout4Fill, href: '/', current: true },
  { name: 'Create Bundle', icon: FaClipboardList, href: 'bundles/', current: false },
  { name: 'Released Bundles', icon: BiNotification, href: 'bundles/released', current: false }
]

export const DefaultLayout = () =>{
  return (<>
    <NavBar>{navigation.map((item) => (
      <NavLink
        key={item.name}
        to={item.href}
        className={({isActive}) => (isActive ? 'active':'')}
        aria-current={item.current ? 'page' : undefined}
      >
        <span><item.icon/></span>
        {item.name}
      </NavLink>
    ))}</NavBar>
    <LayoutBody className="FlexSwitchTablet">
      <Outlet/>
    </LayoutBody>
  </>)
}