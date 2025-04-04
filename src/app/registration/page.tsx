'use client';

import { customerApiManager } from '@/entities/customer/api/customerApiManager';
import { useMutateRequest } from '@/shared/api/helpers/requestReducer/hooks/useMutateRequest';
import { MyColors, MySpacing } from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';
import { CustomButton } from '@/shared/widgets/customButton';
import { CustomInput, useCustomInput } from '@/shared/widgets/customInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegistrationPage = () => {
  localStorage.setItem('adfsdf', 'asd');
  const router = useRouter();

  const loginController = useCustomInput();
  const passwordController = useCustomInput();
  const passwordRepeatController = useCustomInput();

  const [isPaswordRepeatSuccess, setIsPaswordRepeatSuccess] = useState(false);
  const [isLoginFree, setIsLoginFree] = useState(true);
  const [isPasswordLenSuccess, setIsPasswordLenSuccess] = useState(false);
  const [isAnanasInPassword, setIsAnanasInPassword] = useState(false);
  const [isDigitInPassword, setIsDigitInPassword] = useState(false);

  const [_, registerUser] = useMutateRequest<
    string,
    { login: string; password: string }
  >(customerApiManager.registerCustomer, {
    onFail: (error: string) => {
      setIsLoginFree(false);
    },
    onSuccess: (data: string) => {
      console.log(data);
      if (data) {
        localStorage.setItem('authKey', data);
        setIsLoginFree(true);
        router.push('/home');
      } else {
        localStorage.removeItem('authKey');
        setIsLoginFree(false);
      }
    },
  });

  const handleAuthPress = () => {
    router.push('/auth');
  };

  const handleRegisterPress = () => {
    if (
      isPaswordRepeatSuccess &&
      isPasswordLenSuccess &&
      isAnanasInPassword &&
      isDigitInPassword &&
      isPasswordLenSuccess
    ) {
      registerUser({
        login: loginController.value,
        password: passwordController.value,
      });
    }
  };

  const onChangePassword = (value: string) => {
    setIsPaswordRepeatSuccess(value === passwordRepeatController.value);
    setIsAnanasInPassword(value.includes('ананас'));
    setIsDigitInPassword(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((val) => value.includes(`${val}`)),
    );
    setIsPasswordLenSuccess(value.length > 8);
  };

  const onChangePasswordRepeat = (value: string) => {
    setIsPaswordRepeatSuccess(passwordController.value === value);
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

  const ColoredAlert = ({
    trigger,
    text,
  }: {
    trigger: boolean;
    text: string;
  }) => {
    return (
      <p
        style={{
          ...MyTypography.medium16,
          color: trigger ? MyColors.green : MyColors.orange,
          paddingLeft: MySpacing.medium,
        }}
      >
        {text}
      </p>
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
        }}
      >
        <Alert trigger={isLoginFree} text={'Этот логин уже занят'}></Alert>
        <div
          style={{
            gap: MySpacing.min,
            display: 'flex',
            width: '40vh',
            flexDirection: 'column',
          }}
        >
          <CustomInput
            placeholder={'придумай логин'}
            customInputController={loginController}
          ></CustomInput>
          <CustomInput
            secret={true}
            placeholder={'придумай пароль'}
            customInputController={passwordController}
            onChange={onChangePassword}
          ></CustomInput>

          {passwordController.value.length !== 0 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ColoredAlert
                trigger={isDigitInPassword}
                text='Пароль содержит как минимум одну цифру'
              ></ColoredAlert>

              <ColoredAlert
                trigger={isPasswordLenSuccess}
                text='Пароль больше чем 8 символов'
              ></ColoredAlert>

              <ColoredAlert
                trigger={isAnanasInPassword}
                text='Пароль содержит слово "ананас"'
              ></ColoredAlert>
            </div>
          )}

          <CustomInput
            secret={true}
            placeholder={'введи пароль ещё раз'}
            customInputController={passwordRepeatController}
            onChange={onChangePasswordRepeat}
          ></CustomInput>
          {passwordRepeatController.value.length !== 0 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ColoredAlert
                trigger={isPaswordRepeatSuccess}
                text='Повтор пароля введен верно'
              ></ColoredAlert>
            </div>
          )}
        </div>
        <div
          style={{
            gap: MySpacing.min,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CustomButton
            onClick={handleRegisterPress}
            label={'зарегистрироваться'}
          ></CustomButton>
          <CustomButton
            outline={true}
            onClick={handleAuthPress}
            label={'вход'}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
