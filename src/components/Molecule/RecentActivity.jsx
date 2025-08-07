import React from 'react';
import ActivityItem from '../atoms/activityitem';

const RecentActivity = ({ activities }) => {
  return (
    <div className="w-full h-full">
      {activities.map((activity, idx) => (
        <ActivityItem key={idx} {...activity} />
      ))}
    </div>
  );
};

export default RecentActivity;
