'use client';

import { MyColors, MySpacing } from '@/shared/styles';
import { CustomButton } from '@/shared/widgets/customButton';
import { CustomInput, useCustomInput } from '@/shared/widgets/customInput';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
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
        <div
          style={{
            gap: MySpacing.min,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CustomInput
            placeholder={'введи логин'}
            customInputController={loginController}
          ></CustomInput>
          <CustomInput
            secret={true}
            placeholder={'введи пароль'}
            customInputController={passwordController}
          ></CustomInput>
        </div>
        <div
          style={{
            gap: MySpacing.min,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CustomButton
            onClick={handleAuthPress}
            label={'войти'}
          ></CustomButton>
          <CustomButton
            onClick={handleRegisterPress}
            label={'зарегистрироваться'}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
