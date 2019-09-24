import React from 'react';
import { Route, Link } from 'react-router-dom'; 
import Resource from './Resource';

export default function TopicCard({data, match}) {
    const selectedTopic = data.find( item => {
        return ( item.id === match.params.topicId)
    })
return (
<div>
    <h4>{selectedTopic.name}</h4>
    <p>{selectedTopic.description}</p>
    <ul>
    {
        selectedTopic.resources.map( item => (
            <li><Link to={`${match.url}/${item.id}`}>{item.name}</Link></li>
        ))
    }
    </ul>
    <Route path={`${match.path}/:resourceId`} render={ props => { return <Resource {...props} data={selectedTopic.resources} />}} /> 
</div>
);
};