import { MyBordersRadius, MyColors, MyPadding } from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';

export const CustomButton = ({
  onClick,
  label,
  color = MyColors.green,
}: {
  onClick: () => void;
  label: string;
  color?: string;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        borderRadius: MyBordersRadius.inner,
        padding: MyPadding.medium,
        backgroundColor: color,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        ...MyTypography.medium16,
      }}
    >
      {label}
    </button>
  );
};
