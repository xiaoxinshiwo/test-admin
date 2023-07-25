import {Menu} from 'react-admin';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BookIcon from '@mui/icons-material/Book';
export const MyMenu = () => (
    <Menu>
        {/*<Menu.DashboardItem/>*/}
        <Menu.Item to="/users" primaryText="用户" leftIcon={<PermContactCalendarIcon />}/>
        <Menu.Item to="/posts" primaryText="博客" leftIcon={<BookIcon />}/>
    </Menu>
);