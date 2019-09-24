import React from 'react';

export default function Resource({data, match}) {
    const selectedResource = data.find( item => {
        return item.id === match.params.resourceId
    })
    debugger
return (
<div>
    <h4>{selectedResource.name}</h4>
    <p>{selectedResource.name}</p>
    <a href={selectedResource.url}>More info</a>
</div>
);
};