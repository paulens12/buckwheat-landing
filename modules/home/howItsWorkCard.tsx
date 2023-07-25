import Image from 'next/image';
import phoneMockupLightImage from '@/assets/images/phone-mockup-light.png';
import phoneMockupDarkImage from '@/assets/images/phone-mockup-dark.png';
import screenshotEnImage from '@/assets/images/screenshot-en.png';
import screenshotRuImage from '@/assets/images/screenshot-ru.png';
import styles from './howItsWorkCard.module.css';
import { Card } from '@/components/card';
import useLocale from '@/utils/useLocale';
import { LocalesMap } from '@/utils/useLocale';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const locales: LocalesMap = {
  ru: {
    title: 'Как это работает?',
    description:
      'Записывая каждую трату, вы отрезвляете разум и даете представление о том, сколько и как вы можете потратить.',
  },
  en: {
    title: 'How its work?',
    description:
      'Writing down each spending sobers the mind and gives you an idea of how much and how you can spend',
  },
};

export default function HowItsWorkCard() {
  const router = useRouter();
  const t = useLocale(locales);

  return (
    <Card
      className={styles.card}
      title={t('title')}
      subtitle={t('description')}
      backdropOnText
      classes={{ subtitle: styles.description }}
    >
      <div className={styles.mockupPhoneContiner}>
        <Image
          className={clsx(styles.mockupPhone, '--light-image')}
          height={800}
          width={975}
          placeholder="blur"
          alt=""
          src={phoneMockupLightImage}
        />
        <Image
          className={clsx(styles.mockupPhone, '--dark-image')}
          height={800}
          width={975}
          placeholder="blur"
          alt=""
          src={phoneMockupDarkImage}
        />
        <Image
          className={styles.screenshotMain}
          height={2340}
          width={1080}
          placeholder="blur"
          alt=""
          src={router.locale !== 'ru' ? screenshotEnImage : screenshotRuImage}
        />
      </div>
    </Card>
  );
}
