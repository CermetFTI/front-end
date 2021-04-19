import React from 'react';
import './Timeline.css';

function TimelineItem({data}) {
    return (
        <div className='timeline-item'>
            <div className="timeline-item-content">
                <h4>{data.title}</h4>
                <h6>{data.date}</h6>
                <button className='btn btn-primary'>{data.text}</button>
            </div>
            <span className='circle'></span>
        </div>
    )
}

export default TimelineItem
