import React from 'react'

function TimelineItem({data}) {
    return (
        <div>
            <h4>{data.title}</h4>
            <h6>{data.date}</h6>
            <button>{data.text}</button>
        </div>
    )
}

export default TimelineItem
