import GraphFromHistoryView from "./view";

export default async function GraphFromHistory({
  params,
}: {
  params: Promise<{ historyId: string }>;
}) {
  const historyId = Number((await params).historyId);

  return <GraphFromHistoryView historyId={historyId}></GraphFromHistoryView>;
}
