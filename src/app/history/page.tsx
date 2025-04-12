'use client';

import { customerApiManager } from '@/entities/customer/api/customerApiManager';
import Graph from '@/entities/graph/ui/graph';
import useRequest from '@/shared/api/helpers/requestReducer/hooks/useRequest';
import { MyBordersRadius, MyColors, MySpacing } from '@/shared/styles';
import { CustomButton } from '@/shared/widgets/customButton';
import { useEffect } from 'react';

const HistoryPage = () => {
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
          {request.data.map((val, index) => (
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
                  display: 'flex',
                }}
              >
                поиск {index + 1}
              </p>
              <CustomButton onClick={() => {}} label={'Открыть'}></CustomButton>
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
