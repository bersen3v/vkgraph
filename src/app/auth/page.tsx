'use client';

import { customerApiManager } from '@/entities/customer/api/customerApiManager';
import { useMutateRequest } from '@/shared/api/helpers/requestReducer/hooks/useMutateRequest';
import { MyColors, MySpacing } from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';
import { CustomButton } from '@/shared/widgets/customButton';
import { CustomInput, useCustomInput } from '@/shared/widgets/customInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AuthPage = () => {
  const router = useRouter();

  const loginController = useCustomInput();
  const passwordController = useCustomInput();
  const [isAuthSuccessfull, setIsAuthSuccessfull] = useState(true);

  const [_, authUser] = useMutateRequest<
    string,
    { login: string; password: string }
  >(customerApiManager.authCustomer, {
    onFail: (error: string) => {
      setIsAuthSuccessfull(false);
    },
    onSuccess: (data: string) => {
      console.log(data);
      if (data) {
        localStorage.setItem('authKey', data);
        console.log('авторизовал');
        router.push('/home');
      } else {
        setIsAuthSuccessfull(false);
        localStorage.removeItem('authKey');
      }
    },
  });

  const handleAuthPress = () => {
    console.log(loginController.value);
    authUser({
      login: loginController.value,
      password: passwordController.value,
    });
  };

  const handleRegisterPress = () => {
    router.push('/registration');
  };

  const Alert = ({ trigger, text }: { trigger: boolean; text: string }) => {
    return (
      <div>
        {trigger ? (
          <></>
        ) : (
          <p
            style={{
              ...MyTypography.medium16,
              color: MyColors.orange,
              paddingLeft: MySpacing.medium,
            }}
          >
            {text}
          </p>
        )}
      </div>
    );
  };

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
          width: '40vh',
        }}
      >
        <Alert
          trigger={isAuthSuccessfull}
          text={'Ты ввел неверный логин или пароль'}
        ></Alert>
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
            outline={true}
            onClick={handleRegisterPress}
            label={'регистрация'}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
