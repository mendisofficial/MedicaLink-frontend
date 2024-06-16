import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import avatar from '../../assets/img/profie/profile-image.jpg';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { Button } from '@mui/material';
interface SidebarButtonProps {
    isActive?: boolean,
    order: Number,
    link: string,
    icon: string
}

export function SidebarAvatar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Button className="account-info-picture"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    padding:0
                }}
            >
                <img src={avatar} alt="Account" />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </React.Fragment>
    );
}

function SidebarLink({ icon, link, order }: SidebarButtonProps) {

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