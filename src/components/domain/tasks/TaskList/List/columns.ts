export const columns = [
  {
    title: 'Имя пользователя',
    dataIndex: 'username',
    key: 'username',
    width: 200,
    sorter: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
  },
  {
    title: 'Текст задачи',
    dataIndex: 'text',
    key: 'text',
    ellipsis: true,
  },
  {
    title: 'Статус',
    dataIndex: 'statusLabel',
    key: 'status',
    sorter: true,
  },
];