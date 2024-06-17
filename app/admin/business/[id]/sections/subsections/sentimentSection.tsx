import React from 'react'
import WaveChart from '@/components/graphs/waveChart'
import {sentimentsData} from '@/components/data/graphData/SentimentsData'
function SentimentsSection() {
  return (
    <div>
    <WaveChart data={sentimentsData} metadata={{title:"Sentiments", description:""}} />
    </div>
  )
}

export default SentimentsSection
