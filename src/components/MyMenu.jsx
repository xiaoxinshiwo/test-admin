import { Menu } from 'react-admin';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BookIcon from '@mui/icons-material/Book';

export const MyMenu = () => {
    return (
        <Menu>
            {/*<Menu.DashboardItem/>*/}
            <Menu.Item to="/users" primaryText="menus.user.list" leftIcon={<PermContactCalendarIcon/>}/>
            <Menu.Item to="/posts" primaryText="menus.post.list" leftIcon={<BookIcon/>}/>
        </Menu>
    )
};