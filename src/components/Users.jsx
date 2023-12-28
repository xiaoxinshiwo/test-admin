import {
    CreateButton,
    Datagrid,
    EmailField,
    ExportButton,
    FilterButton,
    FilterForm,
    List,
    TextField,
    TextInput,
    TopToolbar,
} from 'react-admin';
import { Stack } from '@mui/material';


const ListToolbar = () => {
    const postFilters = [
        <TextInput key="name" label="users.label.name" source="name" alwaysOn/>,
        <TextInput key="phone" label="users.label.phone" source="phone" alwaysOn/>,
    ];

    return (
        <Stack direction="row" justifyContent="space-between">
            <FilterForm filters={postFilters}/>
            <div>
                <FilterButton filters={postFilters} disableSaveQuery/>
            </div>
        </Stack>
    )
}
const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

export const UserList = () => {

    return (
        <List actions={<ListActions/>} title="users.title">
            <ListToolbar/>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name" label="users.label.name"/>
                <TextField source="username" label="users.label.userName"/>
                <EmailField source="email" label="users.label.email"/>
                <TextField source="address.street" label="users.label.address.street"/>
                <TextField source="phone" label="users.label.phone"/>
                <TextField source="website" label="users.label.website"/>
                <TextField source="company.name" label="users.label.company.name"/>
            </Datagrid>
        </List>
    )
};