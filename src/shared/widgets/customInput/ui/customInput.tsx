import { MyBordersRadius, MyColors, MySpacing } from '@/shared/styles';
import { useCustomInput } from '../hook/useCustomInput';
import { Eye, EyeOff } from 'react-feather';
import { useState } from 'react';
import { MyTypography } from '@/shared/styles/styles/typography';

export const CustomInput = ({
  customInputController,
  placeholder,
  secret = false,
}: {
  placeholder: string;
  customInputController: ReturnType<typeof useCustomInput>;
  secret?: boolean;
}) => {
  const [visible, setVisible] = useState(true);
  const handleClickVisible = () => {
    setVisible(!visible);
  };
  return (
    <div
      style={{
        backgroundColor: MyColors.black50,
        borderRadius: MyBordersRadius.inner,
        display: 'flex',
        outlineWidth: 0,
        padding: MySpacing.medium,
        userSelect: 'none',
        width: '100%',
      }}
    >
      <input
        style={{
          width: '100%',
          color: MyColors.white,
          ...MyTypography.roman18,
        }}
        type={secret ? (visible ? 'text' : 'password') : 'text'}
        placeholder={placeholder}
        value={customInputController.value}
        onChange={(e) => customInputController.setValue(e.target.value)}
      />
      {secret && (
        <button onClick={handleClickVisible}>
          {visible ? (
            <Eye color={MyColors.black30} size={20} />
          ) : (
            <EyeOff color={MyColors.black30} size={20} />
          )}
        </button>
      )}
    </div>
  );
};
