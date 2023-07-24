import {Admin, EditGuesser, Resource,} from "react-admin";
import {dataProvider} from "./dataProvider";
import {UserList} from "./components/Users";
import {PostList} from "./components/Posts";

import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from '@haxqer/ra-language-chinese';

const i18nProvider = polyglotI18nProvider(() => chineseMessages, 'zh');

export const App = () => <Admin i18nProvider={i18nProvider} dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={EditGuesser} />
  <Resource name="users" list={UserList} recordRepresentation="name"/>
</Admin>;
