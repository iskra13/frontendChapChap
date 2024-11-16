import { EnvironmentOutlined } from '@ant-design/icons';
import { informationItems } from './GeneralInformationContent.data';

import styles from './GeneralInformationContent.module.scss';

const GeneralInformationContent = () => {
  return (
    <div className={styles.content}>
      <h2>Общая информация</h2>
      <ul>
        <ul className={styles.list}>
          {informationItems.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <EnvironmentOutlined style={{ fontSize: '24px', color: item.color }} />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </ul>
      <h3>Рекомендации</h3>
      <p>
        В ближайшее время не стоит ходить в сторону “место для пикника”, высокая вероятность
        возникновения пожара
      </p>
    </div>
  );
};

export default GeneralInformationContent;
