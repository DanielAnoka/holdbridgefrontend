import React from 'react';
import {
  Plus,
  TriangleAlert,
  CheckCircle2,
} from 'lucide-react';

const statusColors = {
  Pending: 'bg-yellow-500/10 text-yellow-400',
  Completed: 'bg-green-500/10 text-green-400',
};

const activityIcons = {
  created: Plus,
  dispute: TriangleAlert,
  completed: CheckCircle2,
};

const ActivityItem = ({ type = 'created', title, user, time, amount, status }) => {
  const Icon = activityIcons[type];

  return (
    <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-none">
      {/* Left: Icon + Text */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-white/10">
          <Icon className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-white/50">{user} • {time}</p>
        </div>
      </div>

      {/* Right: Amount + Status */}
      <div className="text-right space-y-1">
        <p className="text-sm font-semibold text-white">${amount}</p>
        <span className={`text-xs px-2 py-0.5 rounded ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
