import chineseMessages from '@haxqer/ra-language-chinese';

const zh = {
    ...chineseMessages,
    users: {
        label: {
            name: '姓名',
            userName: '用户名',
            email: '邮箱',
            address: {
                street: "地址"
            },
            phone: '电话',
            website: '网站',
            company: {
                name: '公司'
            }
        },
        title: '用户管理'
    },
    posts: {
        label: {
            id:'id',
            userId: '用户id',
            title: '标题',
            body: '内容'
        },
        title: '博客列表'
    },
    menus: {
        user: {
            list: "用户",
            create: "创建用户",
            edit: "编辑用户"
        },
        post: {
            list: "博客",
            create: "创建博客",
            edit: "编辑博客"
        },
    }
};

export default zh;