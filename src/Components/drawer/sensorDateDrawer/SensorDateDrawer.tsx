import { useState } from 'react';
import { Button, Drawer, Table } from 'antd';
import { TableOutlined } from '@ant-design/icons';
import { columns, dataSource } from './SensorDateDrawer.data';

const SensorDateDrawer = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  return (
    <>
      <Button
        type="text"
        icon={<TableOutlined style={{ fontSize: '40px' }} />}
        onClick={() => setIsTableVisible(true)}
      />
      <Drawer
        title="Таблица данных с датчиков"
        placement="right"
        onClose={() => setIsTableVisible(false)}
        open={isTableVisible}
        width={600}
        style={{ background: '#669BBC' }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Drawer>
    </>
  );
};

export default SensorDateDrawer;
