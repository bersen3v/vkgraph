import { MyBordersRadius, MyColors, MySpacing } from '@/shared/styles';
import { CustomButton } from '@/shared/widgets/customButton';
import { CustomInput, useCustomInput } from '@/shared/widgets/customInput';

export const UserInfoModal = ({
  inputVkIdController,
  handleCreateGraphClick,
}: {
  inputVkIdController: ReturnType<typeof useCustomInput>;
  handleCreateGraphClick: () => void;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '20%',
        flexDirection: 'column',
        padding: MySpacing.big,
        backgroundColor: MyColors.black70,
        borderRadius: MyBordersRadius.outer,
        gap: MySpacing.medium,
      }}
    >
      <CustomInput
        placeholder={'введи ссылку или id'}
        customInputController={inputVkIdController}
      ></CustomInput>
      <CustomButton
        onClick={handleCreateGraphClick}
        label={'cоздать граф'}
      ></CustomButton>
    </div>
  );
};

export default UserInfoModal;
