
import React from 'react';
import Card from './Card'; 
import CommitteeSection from './CommiteeSection';
import CommitteeMembers from './CommitteeMembers';

const Committee = () => {
  const data = CommitteeMembers;

  return (
    <div>
      <CommitteeSection id = '1' title = 'Advisory' info = {data.advisory}/>
      <CommitteeSection id = '2' title = 'Technical' info = {data.technical}/>
      <CommitteeSection id = '3' title = 'Poster Evaluation' info = {data.posterEvaluation}/>
    </div>
  );
};

export default Committee;
