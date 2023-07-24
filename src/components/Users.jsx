import {
    Button,
    CreateButton,
    Datagrid,
    EmailField,
    ExportButton,
    FilterButton, FilterForm,
    List,
    TextField,
    TextInput,
    TopToolbar,
} from 'react-admin';
import IconEvent from '@mui/icons-material/Event';
import { Stack } from '@mui/material';

const postFilters = [
    <TextInput key="name" label="姓名" source="name" />,
    <TextInput key="phone" label="电话" source="phone"/>,
];
const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} disableSaveQuery/>
        </div>
    </Stack>
)
const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => {
                alert('Your custom action');
            }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button>
    </TopToolbar>
);

export const UserList = () => (
    <List actions={<ListActions/>}>
        <ListToolbar/>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name" label="姓名"/>
            <TextField source="username" label="用户名"/>
            <EmailField source="email" label="邮箱"/>
            <TextField source="address.street" label="地址"/>
            <TextField source="phone" label="电话"/>
            <TextField source="website" label="网站"/>
            <TextField source="company.name" label="公司"/>
        </Datagrid>
    </List>
);