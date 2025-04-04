'use client';

import {
  MyBordersRadius,
  MyColors,
  MyPadding,
  MySpacing,
} from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';
import { CustomButton } from '@/shared/widgets/customButton';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const PagePreview = ({
    title,
    description,
    href,
  }: {
    title: string;
    description: string;
    href: string;
  }) => {
    return (
      <div
        style={{
          backgroundColor: MyColors.black70,
          padding: MyPadding.big,
          borderRadius: MyBordersRadius.outer,
          width: '50vh',
        }}
      >
        <p
          style={{
            ...MyTypography.medium22,
            color: MyColors.white,
            paddingLeft: MyPadding.min,
          }}
        >
          {title}
        </p>
        <p
          style={{
            ...MyTypography.roman16,
            color: MyColors.white,
            lineHeight: 1.2,
            padding: MyPadding.min,
            paddingBottom: MyPadding.medium,
          }}
        >
          {description}
        </p>
        <CustomButton
          onClick={() => {
            router.push(href);
          }}
          label={'открыть'}
        ></CustomButton>
      </div>
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: MyPadding.big,
        gap: MyPadding.medium,
      }}
    >
      <PagePreview
        title={'Создание графа'}
        description={
          'Здесь вы можете сгенерировать граф любого пользователя вконтакте'
        }
        href={'/graph'}
      ></PagePreview>

      <PagePreview
        title={'История поиска'}
        description={
          'Здесь вы можете посмотреть графы, которые были ранее вами сгенерированы'
        }
        href={'/history'}
      ></PagePreview>
    </div>
  );
};

export default HomePage;
