import React from "react";
import { Route, Link } from 'react-router-dom';
import TopicCard from './TopicCard';

export default function Topics({ data }) {
  return (
    <div>
      <ul>
        {data.map(topic => (
          <li>
            <h4><Link to={`/topics/${topic.id}`}>{topic.name}</Link></h4>
          </li>
        ))}
      </ul>
      <Route path={`/topics/:topicId`} render={ props => { return <TopicCard {...props} data={data} /> }} />
    </div>
  );
}
