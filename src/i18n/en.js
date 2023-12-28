import englishMessages from 'ra-language-english';

const en = {
    ...englishMessages,
    users: {
        label: {
            name: 'Name',
            userName: 'Account Name',
            email: 'Email',
            address: {
                street: "Address"
            },
            phone: 'Phone',
            website: 'Website',
            company: {
                name: 'Company Name'
            }
        },
        title: 'User Management'
    },
    posts: {
        label: {
            id: 'Id',
            userId: 'User Id',
            title: 'Title',
            body: 'Body'
        },
        title: 'Post List'
    },
    menus: {
        user: {
            list: "Users",
            create: "Create User",
            edit: "Edit User"
        },
        post: {
            list: "Posts",
            create: "Create Post",
            edit: "Edit Post"
        },
    }
};

export default en;