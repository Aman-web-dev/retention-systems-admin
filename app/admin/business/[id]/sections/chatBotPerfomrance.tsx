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
          Heading="Average Messages Per Month"
          Description="The typical number of messages exchanged monthly on this platform."
        />
        <UniversalCard
          value="400"
          progress={40}
          Heading="Messages Sent"
          Description="Total messages initiated by you or your team this period."
        />
        <UniversalCard
          value="1000"
          progress={40}
          Heading="Messages Received"
          Description="Total messages received from customers or users this period."
        />
        <UniversalCard
          value="2 sec"
          progress={40}
          Heading="Average Response Time"
          Description="The average time it takes to respond to an incoming message."
        />
     
      </div>
  <WaveChart data={MessagesData} metadata={{title:"Messages Recieved vs Messages Sent",description:""}}/>
    </div>
  );
}
