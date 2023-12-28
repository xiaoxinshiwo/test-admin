import { Admin, Resource, useAuthProvider, } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/Users";
import { PostList } from "./components/Posts";
import MyLoginPage from "./components/MyLoginPage";
import MyLayout from "./components/MyLayout";
import defaultTheme from "./components/MyTheme";
import { PostsEdit } from "./components/PostsEdit";
import i18nProvider from './i18n/provider'

export const App = () => {
    const authProvider = useAuthProvider();
    return <>
        <Admin layout={MyLayout} loginPage={MyLoginPage} authProvider={authProvider} theme={defaultTheme}
               i18nProvider={i18nProvider} dataProvider={dataProvider}>
            <Resource name="users" list={UserList} recordRepresentation="name"/>
            <Resource name="posts" list={PostList} edit={PostsEdit}/>
        </Admin>
    </>
};
