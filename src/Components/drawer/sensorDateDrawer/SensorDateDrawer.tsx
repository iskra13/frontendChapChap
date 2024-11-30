import { useState } from 'react';
import { Button, Drawer, Table } from 'antd';
import { TableOutlined } from '@ant-design/icons';
import { columns } from './SensorDateDrawer.data';
import { allCoordinates } from '../../coordinate/Coordinate.data';

import { useSocketDataStore } from '../../../Store';

const SensorDateDrawer = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);
  const { socketData } = useSocketDataStore((state) => state);

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
        width={1050}
        style={{ background: '#669BBC' }}
      >
        <Table dataSource={socketData} columns={columns as any} />
      </Drawer>
    </>
  );
};

export default SensorDateDrawer;
