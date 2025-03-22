'use client';

import { MyColors, MySpacing } from '@/shared/styles';
import { CustomButton } from '@/shared/widgets/customButton';
import { CustomInput, useCustomInput } from '@/shared/widgets/customInput';
import { useRouter } from 'next/navigation';

export const MainAuthPage = () => {
  const router = useRouter();

  const loginController = useCustomInput();
  const passwordController = useCustomInput();

  const handleAuthPress = () => {
    console.log(loginController.value);
    if (loginController.value == '1' && passwordController.value == '1') {
      router.push('/home');
    }
  };

  const handleRegisterPress = () => {};

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100vh',
        backgroundColor: MyColors.black,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: MySpacing.min,
      }}
    >
      <div
        style={{
          gap: MySpacing.medium,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
          <CustomInput
            placeholder={'Введи логин'}
            customInputController={loginController}
          ></CustomInput>
          <CustomInput
            placeholder={'Введи пароль'}
            customInputController={passwordController}
          ></CustomInput>
        </div>
        <div>
          <CustomButton
            onClick={handleAuthPress}
            label={'Войти'}
          ></CustomButton>
          <CustomButton
            onClick={handleRegisterPress}
            label={'Зарегистрироваться'}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};
