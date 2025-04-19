'use client';
import { customerApiManager } from "@/entities/customer/api/customerApiManager";
import Graph from "@/entities/graph/ui/graph";
import useRequest from "@/shared/api/helpers/requestReducer/hooks/useRequest";

export default function GraphFromHistoryView({historyId}: {historyId: number}){
  const [request, reload] = useRequest(
    () => customerApiManager.getHistory(),
    [],
  );
  
  return <div style={{display: 'flex'}}>
    {
      request.isLoaded && !request.isLoading ? 
      <Graph graphData={request.data[historyId]}></Graph> : <p>гружу</p>
    }
  </div>;
}