import React from 'react';
import timelineData from './data';
import TimelineItem from './TimelineItem';
import './Timeline.css';

function TimelineContainer() {
    return (
        <div className='timeline-container'>
            {/* <TimelineItem props={data} /> */}
            {timelineData.map((data,idx)=>
            <TimelineItem data={data} key={idx} />
            )}
        </div>
    )
}

export default TimelineContainer
