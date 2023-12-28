import { Edit, required, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const PostsEdit = () => {
    return (
        <Edit title="menus.post.edit">
            <SimpleForm>
                <TextInput disabled label="posts.label.id" source="id" style={{display: 'none'}}/>
                <TextInput source="title" label="posts.label.title" validate={required()}/>
                <RichTextInput source="body" label="posts.label.body" validate={required()}/>
            </SimpleForm>
        </Edit>
    )
};
