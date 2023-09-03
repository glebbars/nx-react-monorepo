import styles from './common-ui.module.scss';
import { Paragraph } from '../paragraph/paragraph';

export function CommonUi() {
  return (
    <div className={styles['container']}>
      <Paragraph>Welcome to CommonUi!</Paragraph>
    </div>
  );
}

export default CommonUi;
