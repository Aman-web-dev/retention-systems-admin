import React from 'react'
import {FakeTable} from '@/components/graphs/Table'
import {QueryKeywordHeadings,QueryKeywordData} from '@/components/data/tableData/QueryKeywordsData'

function KeywordSection() {
  return (
    <div>
      <FakeTable title='Keyword' description='' headings={QueryKeywordHeadings} data={QueryKeywordData}/>
    </div>
  )
}

export default KeywordSection
