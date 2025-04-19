'use client';

import { customerApiManager } from '@/entities/customer/api/customerApiManager';
import Graph from '@/entities/graph/ui/graph';
import useRequest from '@/shared/api/helpers/requestReducer/hooks/useRequest';
import { MyBordersRadius, MyColors, MySpacing } from '@/shared/styles';
import { MyTypography } from '@/shared/styles/styles/typography';
import { CustomButton } from '@/shared/widgets/customButton';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HistoryPage = () => {
  const router = useRouter();

  const [request, reload] = useRequest(
    () => customerApiManager.getHistory(),
    [],
  );

  useEffect(() => {
    if (request.isLoaded) {
      console.log(request.data);
    }
  }, [request]);

  return (
    <div>
      {request.isLoaded ? (
        <div>
          {request.data?.map((val, index) => (
            <div
              key={index}
              style={{
                backgroundColor: MyColors.black70,
                padding: MySpacing.medium,
                margin: MySpacing.medium,
                borderRadius: MyBordersRadius.outer,
                width: '40vh',
              }}
            >
              <p
                style={{
                  ...MyTypography.medium22,
                  color: MyColors.white,
                  display: 'flex',
                }}
              >
                поиск {index + 1}
              </p>
              <CustomButton
                onClick={() => {
                  router.push(`/history/${index}`);
                }}
                label={'Открыть'}
              ></CustomButton>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HistoryPage;
