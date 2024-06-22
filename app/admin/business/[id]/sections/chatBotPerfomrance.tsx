import { UniversalCard } from "@/components/assets/UniversalCard";
import WaveChart from "@/components/graphs/waveChart";
import {MessagesData }from '@/components/data/graphData/messagesData'
export default function ChatBotPerformance() {
  return (
<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
    <UniversalCard
      value="4500"
      progress={40}
      Heading="Avg Messages/Month"
      Description="Typical monthly message count."
    />
    <UniversalCard
      value="400"
      progress={40}
      Heading="Messages Sent"
      Description="Messages you/your team sent."
    />
    <UniversalCard
      value="1000"
      progress={40}
      Heading="Messages Received"
      Description="Messages received from users."
    />
    <UniversalCard
      value="2 sec"
      progress={40}
      Heading="Avg Response Time"
      Description="Average response time."
    />
  </div>
  <WaveChart data={MessagesData} metadata={{title: "Messages Received vs Messages Sent", description: ""}}/>
</div>
  );
}
