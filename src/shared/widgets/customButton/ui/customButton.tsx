import { MyBordersRadius, MyColors, MyPadding } from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';

export const CustomButton = ({
  onClick,
  label,
  color = MyColors.green,
  outline = false,
}: {
  onClick: () => void;
  label: string;
  color?: string;
  outline?: boolean;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={
        outline
          ? {
              borderWidth: 2,
              borderColor: MyColors.green,
              color: MyColors.green,
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              borderRadius: MyBordersRadius.inner,
              padding: MyPadding.medium,
              ...MyTypography.medium16,
            }
          : {
              borderRadius: MyBordersRadius.inner,
              padding: MyPadding.medium,
              backgroundColor: color,
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              ...MyTypography.medium16,
            }
      }
    >
      {label}
    </button>
  );
};
