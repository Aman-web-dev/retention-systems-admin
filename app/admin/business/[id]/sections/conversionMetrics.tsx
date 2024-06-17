import { UniversalCard } from "@/components/assets/UniversalCard";
import WaveChart from "@/components/graphs/waveChart";
import {ConversionData} from'@/components/data/graphData/conversionData'

export const   ConversionMetrics = () => {
    return (
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 ">
        <UniversalCard value={"700"} progress={70} Heading="Leads Generated" Description="Number Of Leads generated " />
          
          <UniversalCard value={"400"} progress={70} Heading="Conversions" Description="Number Of conversions" />
          
          <UniversalCard value={"70%"} progress={70} Heading="Conversion Rate" Description="Rate of conversion" />
        </div>
<WaveChart data={ConversionData} metadata={{title:"Leads generated Vs conversions Made",description:""}}/>
      </div>
    );
  };