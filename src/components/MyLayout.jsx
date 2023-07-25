import * as React from 'react';
import {forwardRef} from 'react';
import {AppBar, Layout, UserMenu, useLogout} from 'react-admin';
import {MenuItem} from '@mui/material';
import ExitIcon from '@mui/icons-material/PowerSettingsNew';
import {MyMenu} from "./MyMenu";

// It's important to pass the ref to allow Material UI to manage the keyboard navigation
// const MyLogoutButton = forwardRef((props, ref) => {
//     const logout = useLogout();
//     const handleClick = () => logout();
//     return (
//         <MenuItem
//             onClick={handleClick}
//             ref={ref}
//             // It's important to pass the props to allow Material UI to manage the keyboard navigation
//             {...props}
//         >
//             <ExitIcon/> Logout
//         </MenuItem>
//     );
// });
//
// const MyUserMenu = () => (
//     <UserMenu>
//         <MyLogoutButton/>
//     </UserMenu>
// );

const MyAppBar = () => <AppBar userMenu={<UserMenu/>}/>;

const MyLayout = (props) => (
    <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>
);

export default MyLayout;