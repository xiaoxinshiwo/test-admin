import { AppBar, Layout, UserMenu } from 'react-admin';
import { MyMenu } from "./MyMenu";

const MyAppBar = () => <AppBar userMenu={<UserMenu/>}/>;
const MyLayout = (props) => (
    <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>
);

export default MyLayout;