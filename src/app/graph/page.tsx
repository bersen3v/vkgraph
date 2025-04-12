'use client';
import { MySpacing } from '@/shared/styles';
import { useCustomInput } from '@/shared/widgets/customInput';
import { UserInfoModal } from './components';

import { useMemo, useState } from 'react';
import { GraphData, GraphLink, GraphNode } from '@/entities/graph/model/model';
import Graph from '@/entities/graph/ui/graph';

const GraphPage = () => {
  const inputVkIdController = useCustomInput();

  const initGraphData = useMemo(() => {
    return {
      nodes: [],
      links: [],
    };
  }, []);

  const [graphData, setGraphData] = useState<GraphData>(initGraphData);
  const authKey = localStorage.getItem('authKey')

  const handleCreateGraphClick = () => {
    setGraphData(initGraphData);

    const eventSource = new EventSource(
      `http://127.0.0.1:5000/graphstream?id=${inputVkIdController.value}&customer_id=${authKey}`,
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data) as GraphData;
      if (data.nodes.length % 3 === 0)
        setGraphData((graphData) => {
          const newNodes: GraphNode[] = [];
          data.nodes.forEach((node) => {
            const isInArray = graphData.nodes.filter(
              (node1) => node1.id === node.id,
            );
            if (isInArray.length === 0) {
              newNodes.push(node);
            }
          });

          const newLinks: GraphLink[] = [];
          data.links.forEach((link) => {
            const isInArray = graphData.links.filter(
              (link1) =>
                link1.target === link.target && link.source == link1.source,
            );
            if (isInArray.length === 0) {
              newLinks.push(link);
            }
          });

          return {
            nodes: [...graphData.nodes, ...newNodes],
            links: [...graphData.links, ...newLinks],
          };
        });
    };
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ position: 'relative' }}>
        <Graph graphData={graphData}></Graph>
      </div>
      <div
        style={{
          width: '100vw',
          position: 'absolute',
          top: MySpacing.medium,
          left: MySpacing.medium,
        }}
      >
        <UserInfoModal
          inputVkIdController={inputVkIdController}
          handleCreateGraphClick={handleCreateGraphClick}
        ></UserInfoModal>
      </div>
    </div>
  );
};

export default GraphPage;
