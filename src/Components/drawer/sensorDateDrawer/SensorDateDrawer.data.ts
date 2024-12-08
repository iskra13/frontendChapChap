export const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jane Smith',
    age: 28,
    address: 'London No. 1 Lake Park',
  },
] as const;

export const columns = [
  {
    title: 'Дата',
    dataIndex: 'timestamp',
    key: 'timestamp',
    align: 'center',
  },
  {
    title: 'Широта',
    dataIndex: 'node_x',
    key: 'node_x',
    align: 'center',
    render: (value: string) => parseFloat(value).toFixed(2),
  },
  {
    title: 'Долгота',
    dataIndex: 'node_y',
    key: 'node_y',
    align: 'center',
    render: (value: string) => parseFloat(value).toFixed(2),
  },

  {
    title: 'Температура',
    dataIndex: 'temperature',
    key: 'temperature',
    align: 'center',
  },
  {
    title: 'Влажность',
    dataIndex: 'humidity',
    key: 'humidity',
    align: 'center',
  },
  {
    title: 'Кислород',
    dataIndex: 'CO2',
    key: 'CO2',
    align: 'center',
  },
  {
    title: 'Углекислый газ',
    dataIndex: 'oxygen',
    key: 'oxygen',
    align: 'center',
  },
  {
    title: 'Есть огонь?',
    dataIndex: 'fire',
    key: 'fire',
    align: 'center',
    render: (value: string) => (parseFloat(value) ? 'да' : 'нет'),
  },
];
