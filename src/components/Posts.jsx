import {List, Datagrid, TextField, ReferenceField, EditButton, RichTextField} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid >
            <TextField source="id" lable="id"/>
            <ReferenceField source="userId" reference="users" label="用户id"/>
            <TextField source="title" label="标题"/>
            <RichTextField source="body" label="内容"/>
            <EditButton />
        </Datagrid>
    </List>
);