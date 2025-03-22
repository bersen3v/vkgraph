import { MyBordersRadius, MyColors } from '@/shared/styles';
import { useCustomInput } from '../hook/useCustomInput';

export const CustomInput = ({
  customInputController,
  placeholder,
}: {
  placeholder: string;
  customInputController: ReturnType<typeof useCustomInput>;
}) => {
  return (
    <input
      style={{
        borderRadius: MyBordersRadius.outer,
        backgroundColor: MyColors.grey,
        width: '100%',
      }}
      placeholder={placeholder}
      value={customInputController.value}
      onChange={(e) => customInputController.setValue(e.target.value)}
    />
  );
};
