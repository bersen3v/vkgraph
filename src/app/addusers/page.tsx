'use client';

import { customerApiManager } from '@/entities/customer/api/customerApiManager';
import { useMutateRequest } from '@/shared/api/helpers/requestReducer/hooks/useMutateRequest';
import { MyBordersRadius, MyColors } from '@/shared/styles';
import { CustomButton } from '@/shared/widgets/customButton';
import { CustomInput, useCustomInput } from '@/shared/widgets/customInput';
import { SyntheticEvent, useRef, useState } from 'react';

export default function AddUsersPage() {
  const nameController = useCustomInput();
  const loginController = useCustomInput();
  const passwordController = useCustomInput();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoFile, setPhotoFile] = useState<File | undefined>(undefined);
  const [photo, setPhoto] = useState(
    'https://sun9-18.userapi.com/impg/DxTi74PxFH7VOAD5sA-LIn9OeLBt25-BUmq4IQ/kKtjOzHTWJY.jpg?size=1125x1125&quality=95&sign=dcaf83a8acb1f38bf36331be11cd4496&type=album',
  );

  const [loadRequest, mutateLoadCustomer] = useMutateRequest(
    customerApiManager.addCustomer,
    {
      onSuccess: () => {},
      onFail: () => {},
    },
  );

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDone = () => {
    if (loginController.value !== '' && passwordController.value != '') {
      const formData = new FormData();
      if (photoFile) {
        formData.append('photo', photoFile);
      }
      formData.append('login', loginController.value);
      formData.append('password', passwordController.value);
      mutateLoadCustomer(formData);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? undefined;

    if (files) {
      const fileUri = URL.createObjectURL(files[0]);
      setPhoto(fileUri);
      setPhotoFile(files[0]);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50vh',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <img
            src={photo}
            height={100}
            width={100}
            style={{ borderRadius: MyBordersRadius.outer }}
          ></img>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            style={{
              display: 'none',
            }}
            onChange={handleFileChange}
          />
          <div>
            <CustomButton
              outline={true}
              onClick={handleUpload}
              label={'Загрузить фото'}
            ></CustomButton>
          </div>
        </div>
        <CustomInput
          placeholder={'Логин'}
          customInputController={loginController}
        ></CustomInput>
        <CustomInput
          placeholder={'Пароль'}
          customInputController={passwordController}
        ></CustomInput>
        <CustomButton onClick={handleDone} label={'Добавить'}></CustomButton>
      </div>
    </div>
  );
}
