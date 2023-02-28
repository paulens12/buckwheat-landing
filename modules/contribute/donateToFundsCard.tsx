import styles from '@/modules/contribute/ruFunds.module.css';
import { Card, CardLink } from '@/components/card';
import clsx from 'clsx';

export default function DonateToFunsCard() {
  return (
    <Card
      className={styles.card}
      title="Пожертвуйте в фонды"
      subtitle="Сейчас с России есть много людей, которые остались наедине с системой и очень нуждаются в помощи. Рассмотрите возможность пожертвовать в разные фонды помощи. Им эта помощь нужна больше чем мне. Вот несколько фондов которые я бы посоветовал"
    >
      <CardLink
        className={clsx(styles.link, styles.topOffset)}
        title="Независимый правозащитный проект"
        hrefTitle="ovdinfo.org"
        href="https://ovdinfo.org/"
      />
      <CardLink
        className={styles.link}
        title="Фонд помощи социально-незащищённым гражданам"
        hrefTitle="nuzhnapomosh.ru"
        href="https://nuzhnapomosh.ru/"
      />
    </Card>
  );
}
