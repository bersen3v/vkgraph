'use client';
import { customerApiManager } from '@/entities/customer/api/customerApiManager';
import useRequest from '@/shared/api/helpers/requestReducer/hooks/useRequest';
import {
  MyBordersRadius,
  MyColors,
  MyPadding,
  MySpacing,
} from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';
import { CustomButton } from '@/shared/widgets/customButton';
import Image from 'next/image';

export default function ManageDBPage() {
  // const moreController = useCustomModal()
  const [dbDataRequest, reloadDbDataRequest] = useRequest(
    customerApiManager.getCustomers,
    [],
  );

  return (
    <div>
      <div style={{ position: 'relative' }}>
        {dbDataRequest.isLoaded ? (
          <div style={{ gap: MySpacing.big, padding: MyPadding.big }}>
            {dbDataRequest.data.map((val) => (
              <div
                key={val.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: MyColors.black70,
                  padding: MyPadding.medium,
                  borderRadius: MyBordersRadius.outer,
                  marginBottom: MySpacing.big,
                  gap: MySpacing.medium,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                  <img
                    src={`http://127.0.0.1:5000/${val.photo}`}
                    height={200}
                    width={200}
                    style={{ borderRadius: MyBordersRadius.inner }}
                  ></img>
                  <div>
                    <p
                      style={{
                        ...MyTypography.medium22,
                        color: MyColors.white,
                      }}
                    >
                      логин: {val.login}
                    </p>
                    <p
                      style={{
                        ...MyTypography.medium22,
                        color: MyColors.white,
                      }}
                    >
                      пароль: {val.password}
                    </p>
                    <p
                      style={{
                        ...MyTypography.medium22,
                        color: MyColors.white,
                      }}
                    >
                      id: {val.id}
                    </p>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', gap: 10, flexDirection: 'column' }}
                >
                  <CustomButton
                    onClick={() => {}}
                    label={'Подробнее'}
                  ></CustomButton>

                  <CustomButton
                    onClick={() => {}}
                    label={'Изменить'}
                  ></CustomButton>

                  <CustomButton
                    onClick={() => {}}
                    label={'Удалить'}
                  ></CustomButton>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          top: 100,
          left: 100,
          right: 100,
          bottom: 100,
        }}
      >
        <CustomButton
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          label={''}
        ></CustomButton>
      </div>
    </div>
  );
}
