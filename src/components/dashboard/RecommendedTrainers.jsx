
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const trainers = [
  { id: 'trainer1', name: 'Sarah Johnson', specialty: 'Yoga & Pilates', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=100' },
  { id: 'trainer2', name: 'Mike Williams', specialty: 'Strength Training', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=100' },
  { id: 'trainer3', name: 'Jessica Lee', specialty: 'Cardio & HIIT', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=100' },
];

const RecommendedTrainers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleViewProfile = (trainerId) => {
     toast({
        title: "Trainer Profile",
        description: `Navigating to profile for trainer ${trainerId}. (Placeholder)`,
      });
    // navigate(`/profile/${trainerId}`); // Or a specific trainer profile page
  };
  
  const handleConnect = (trainerName) => {
    toast({
      title: "Connection Request Sent",
      description: `Your request to connect with ${trainerName} has been sent.`,
      variant: "success"
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recommended Trainers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleViewProfile(trainer.id)}>
              <Avatar className="h-10 w-10">
                <AvatarImage src={trainer.avatar} alt={trainer.name} />
                <AvatarFallback>{trainer.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h5 className="font-medium text-sm text-foreground/90">{trainer.name}</h5>
                <p className="text-xs text-muted-foreground/80">{trainer.specialty}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 h-8 w-8" onClick={() => handleConnect(trainer.name)}>
                <UserPlus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 h-8 w-8">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecommendedTrainers;
  