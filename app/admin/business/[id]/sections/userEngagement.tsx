import { UniversalCard } from "@/components/assets/UniversalCard";
import { userEngagementData } from "@/components/data/graphData/userEngagement";
import WaveChart from "@/components/graphs/waveChart";
export const UserEngagement = () => {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <UniversalCard value="500" progress={50} Heading="Total Users" Description="Registered users." /> 
      <UniversalCard value="400" progress={30} Heading="Active Users" Description="Recently engaged users." />
      <UniversalCard value="70" progress={80} Heading="Interactions/User" Description="Avg. interactions per user." />
      <UniversalCard value="9 mins" progress={90} Heading="Average Chat Duration" Description="Avg. session duration." /> 
    </div>
    <WaveChart data={userEngagementData} metadata={{ title: "Total vs Active Users", description: "" }} />
  </div>
  );
};
