import React from 'react'
import {FakeTable} from '@/components/graphs/Table'
import {QueryTopicHeadings,QueryTopicData} from '@/components/data/tableData/QueryTopicsData'
 
function TopicSection() {
  return (
    <div>
      <FakeTable title='Query Analysis' description='' data={QueryTopicData} headings={QueryTopicHeadings}/>
    </div>
  )
}

export default TopicSection
