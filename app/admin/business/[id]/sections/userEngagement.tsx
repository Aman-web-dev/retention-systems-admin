import { UniversalCard } from "@/components/assets/UniversalCard";
import {userEngagementData}from '@/components/data/graphData/userEngagement'
import WaveChart from "@/components/graphs/waveChart";
export const UserEngagement = () => {
    return (
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
       <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
  <UniversalCard 
    value="500" 
    progress={50} 
    Heading="Total Users" 
    Description="The overall count of registered or identified users in your system." 
  />
  <UniversalCard 
    value="400" 
    progress={30} 
    Heading="Active Users" 
    Description="The number of users who have recently engaged with your platform or service." 
  />
  <UniversalCard 
    value="70"  // Assuming you'll populate this value dynamically 
    progress={80} 
    Heading="Interactions/User" 
    Description="The average number of interactions (e.g., messages, clicks) per active user." 
  />
  <UniversalCard 
    value="9 mins" 
    progress={90} 
    Heading="Average Chat Duration" 
    Description="The average length of time users spend in a single chat session." 
  />
</div>
        <WaveChart data={userEngagementData} metadata={{title:"Total vs Active Users",description:""}}/>
      </div>
    );
  };
  