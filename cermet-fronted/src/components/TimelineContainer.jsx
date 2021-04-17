import React from 'react'
import timelineData from './data'
import TimelineItem from './TimelineItem'

function TimelineContainer() {
    return (
        <div>
            {/* <TimelineItem props={data} /> */}
            {timelineData.map((data,idx)=>
            <TimelineItem data={data} key={idx} />
            )}
        </div>
    )
}

export default TimelineContainer
