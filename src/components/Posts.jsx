import {List, Datagrid, TextField, ReferenceField, EditButton, RichTextField} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <RichTextField source="body"/>
            <EditButton />
        </Datagrid>
    </List>
);