
import React from 'react';
import { Card } from '@/components/ui/card';

const ListItemCard = ({ icon: Icon, iconBgColor, iconColor, title, subtitle, details, detailsBgColor, detailsColor }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm p-3 flex items-center space-x-3 shadow-md hover:bg-white/10 transition-colors border-white/10">
      {Icon && (
        <div className={`p-2.5 ${iconBgColor} rounded-lg`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      )}
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground/90">{title}</p>
        {subtitle && <p className="text-xs text-muted-foreground/80">{subtitle}</p>}
      </div>
      {details && (
        <span className={`ml-auto text-xs ${detailsBgColor} ${detailsColor} px-2.5 py-1 rounded-full font-medium whitespace-nowrap`}>
          {details}
        </span>
      )}
    </Card>
  );
};

export default ListItemCard;
  