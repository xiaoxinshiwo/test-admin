import { Layout } from 'react-admin';
import { MyMenu } from "./MyMenu";
import MyAppbar from "./MyAppbar";
// const MyAppBar = () => <AppBar userMenu={<UserMenu/>}/>;
const MyLayout = (props) => (
    <Layout {...props} appBar={MyAppbar} menu={MyMenu}/>
);

export default MyLayout;