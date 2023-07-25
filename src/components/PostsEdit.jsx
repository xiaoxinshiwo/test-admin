import {Edit, required, SimpleForm, TextInput} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const PostsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id"/>
            <TextInput source="title" validate={required()}/>
            <RichTextInput source="body" validate={required()}/>
        </SimpleForm>
    </Edit>
);
