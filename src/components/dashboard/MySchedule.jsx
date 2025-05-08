
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ListItemCard from '@/components/dashboard/ListItemCard';
import { Zap, Dumbbell, Waves, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const MySchedule = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const schedule = [
    { id: 1, activity: 'Morning Stretch', time: '08:00 AM', details: '20 Min', icon: Zap, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', trainerId: 'user' },
    { id: 2, activity: 'Strength Training', time: '09:00 AM', details: '45 Min', icon: Dumbbell, color: 'text-red-400', bgColor: 'bg-red-500/10', trainerId: 'user' },
    { id: 3, activity: 'Cardio Session', time: '05:00 PM', details: '30 Min', icon: Waves, color: 'text-blue-400', bgColor: 'bg-blue-500/10', trainerId: 'user' },
  ];

  const handleViewProfile = (trainerId) => {
    if (trainerId === 'user') {
      navigate('/profile');
    } else {
      toast({
        title: "Trainer Profile",
        description: `Navigating to profile for trainer ${trainerId}. (Placeholder)`,
        variant: "default"
      });
      // navigate(`/trainer/${trainerId}`); // Example for specific trainer profile
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Schedule</CardTitle>
        <Button variant="link" size="sm" className="text-primary p-0 h-auto hover:text-primary/80" onClick={() => navigate('/activity')}>View All &gt;</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {schedule.map(item => (
          <div key={item.id} className="flex items-center space-x-2">
            <ListItemCard
              icon={item.icon}
              iconBgColor={item.bgColor}
              iconColor={item.color}
              title={item.activity}
              subtitle={item.time}
              details={item.details}
              detailsBgColor={item.bgColor}
              detailsColor={item.color}
            />
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" onClick={() => handleViewProfile(item.trainerId)}>
              <User className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MySchedule;
  