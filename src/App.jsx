import {Admin, EditGuesser, Resource, useAuthProvider,} from "react-admin";
import {dataProvider} from "./dataProvider";
import {UserList} from "./components/Users";
import {PostList} from "./components/Posts";

import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from '@haxqer/ra-language-chinese';
import MyLoginPage from "./components/MyLoginPage";
import MyLayout from "./components/MyLayout";
import {PostsEdit} from "./components/PostsEdit";

const i18nProvider = polyglotI18nProvider(() => chineseMessages, 'zh');

export const App = () => {
    const authProvider = useAuthProvider();
    return <Admin layout={MyLayout} loginPage={MyLoginPage} authProvider={authProvider}
                  i18nProvider={i18nProvider} dataProvider={dataProvider}>
        <Resource name="users"  list={UserList} recordRepresentation="name"/>
        <Resource name="posts" list={PostList} edit={PostsEdit}/>
    </Admin>
};
