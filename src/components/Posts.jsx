import { Datagrid, EditButton, List, ReferenceField, RichTextField, TextField } from "react-admin";

export const PostList = () => {
    return (
        <List title="posts.title">
            <Datagrid>
                <TextField source="id" label="posts.label.id"/>
                <ReferenceField source="userId" reference="users" label="posts.label.userId"/>
                <TextField source="title" label="posts.label.title"/>
                <RichTextField source="body" label="posts.label.body"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};