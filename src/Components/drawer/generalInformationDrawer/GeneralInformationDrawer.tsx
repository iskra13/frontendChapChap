import { FC } from 'react';
import { Button, Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import GeneralInformationContent from '../../generalInformationContent/GeneralInformationContent';

const GeneralInformationDrawer: FC = () => {
  return (
    <Popover
      content={<GeneralInformationContent />}
      trigger="click"
      placement="right"
      overlayStyle={{ width: '350px' }}
    >
      <Button type="text" icon={<InfoCircleOutlined style={{ fontSize: '40px' }} />} />
    </Popover>
  );
};
export default GeneralInformationDrawer;
