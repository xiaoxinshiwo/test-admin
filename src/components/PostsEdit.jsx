import {Edit, required, SimpleForm, TextInput} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const PostsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" style={{display:'none'}}/>
            <TextInput source="title" label="标题" validate={required()}/>
            <RichTextInput source="body" label="内容" validate={required()}/>
        </SimpleForm>
    </Edit>
);
