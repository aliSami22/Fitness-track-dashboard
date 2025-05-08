
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ListItemCard from '@/components/dashboard/ListItemCard';
import { Target, TrendingUp, CalendarCheck } from 'lucide-react';

const GoalsSection = () => {
  const goals = [
    { id: 1, name: 'ABS & Stretch', date: 'Saturday, May 18 | 08:00 AM', duration: '30 Min/day', icon: Target, color: 'text-green-400', bgColor: 'bg-green-500/10' },
    { id: 2, name: 'Increase Push Ups', date: 'Daily Goal', duration: '50 Sets/day', icon: TrendingUp, color: 'text-orange-400', bgColor: 'bg-orange-500/10' },
    { id: 3, name: 'Consistent Workouts', date: 'This Week', duration: '5 days/week', icon: CalendarCheck, color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Goals</CardTitle>
        <Button variant="link" size="sm" className="text-primary p-0 h-auto hover:text-primary/80">View All &gt;</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {goals.map(goal => (
           <ListItemCard
            key={goal.id}
            icon={goal.icon}
            iconBgColor={goal.bgColor}
            iconColor={goal.color}
            title={goal.name}
            subtitle={goal.date}
            details={goal.duration}
            detailsBgColor={goal.bgColor}
            detailsColor={goal.color}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default GoalsSection;
  