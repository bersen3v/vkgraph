import { MyBordersRadius, MyColors, MyPadding } from '@/shared/styles';

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
        borderRadius: MyBordersRadius.outer,
        padding: MyPadding.min,
        backgroundColor: color,
        display: 'flex',
        width: '100%',
      }}
    >
      {label}
    </button>
  );
};
