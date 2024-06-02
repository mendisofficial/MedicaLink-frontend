import { NavLink } from 'react-router-dom';

interface SidebarButtonProps{
    isActive? : boolean,
    order : Number,
    link : string,
    icon : string
}

function SidebarLink({icon, link, order } : SidebarButtonProps){

    return (
        <li className={`sidebar-list-item order-${order}`}>
            
            <NavLink
                    to={link}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                <span className="material-symbols-outlined">
                    {icon}
                </span>
            </NavLink>
        </li>
    )
}

export default SidebarLink;