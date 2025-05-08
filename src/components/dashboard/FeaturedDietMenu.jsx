
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Utensils } from 'lucide-react';

const FeaturedDietMenu = () => {
  const { toast } = useToast();

  const menuItems = {
    breakfast: [
      { id: 1, name: 'Avocado Salad', details: '8% carbs • 16% protein • 6% Fat', avatarSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200', fallback: 'AS' },
      { id: 2, name: 'Blueberry Bowl', details: '10% carbs • 5% protein • 3% Fat', avatarSrc: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200', fallback: 'BB' },
    ],
    lunch: [
      { id: 3, name: 'Chicken Caesar Wrap', details: '15% carbs • 25% protein • 10% Fat', avatarSrc: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200', fallback: 'CW' },
    ],
    dinner: [
       { id: 4, name: 'Salmon & Asparagus', details: '5% carbs • 30% protein • 15% Fat', avatarSrc: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200', fallback: 'SA' },
    ],
  };

  const handleAddFood = (foodItem) => {
    toast({
      title: `${foodItem.name} Added!`,
      description: `Successfully logged ${foodItem.name} to your daily intake.`,
      variant: "success",
      duration: 3000,
    });
  };

  const DietItem = ({ item }) => (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
      <Avatar className="h-12 w-12">
        <AvatarImage src={item.avatarSrc} alt={item.name} />
        <AvatarFallback>{item.fallback}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h5 className="font-medium text-sm text-foreground/90">{item.name}</h5>
        <p className="text-xs text-muted-foreground/80">{item.details}</p>
      </div>
      <Button variant="ghost" size="sm" onClick={() => handleAddFood(item)} className="text-primary hover:text-primary/80">
        <Utensils className="h-4 w-4 mr-1" /> Add
      </Button>
    </div>
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Featured Diet Menu</CardTitle>
        <span className="text-xs text-muted-foreground/80">Today's Picks</span>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
            <TabsTrigger value="breakfast" className="data-[state=active]:bg-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch" className="data-[state=active]:bg-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Lunch</TabsTrigger>
            <TabsTrigger value="dinner" className="data-[state=active]:bg-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Dinner</TabsTrigger>
          </TabsList>
          <TabsContent value="breakfast" className="mt-4 space-y-2">
            {menuItems.breakfast.length > 0 ? (
              menuItems.breakfast.map(item => <DietItem key={item.id} item={item} />)
            ) : (
              <p className="text-sm text-muted-foreground/80 text-center py-4">No breakfast items today.</p>
            )}
          </TabsContent>
          <TabsContent value="lunch" className="mt-4 space-y-2">
            {menuItems.lunch.length > 0 ? (
              menuItems.lunch.map(item => <DietItem key={item.id} item={item} />)
            ) : (
              <p className="text-sm text-muted-foreground/80 text-center py-4">Lunch menu coming soon!</p>
            )}
          </TabsContent>
          <TabsContent value="dinner" className="mt-4 space-y-2">
            {menuItems.dinner.length > 0 ? (
              menuItems.dinner.map(item => <DietItem key={item.id} item={item} />)
            ) : (
              <p className="text-sm text-muted-foreground/80 text-center py-4">Dinner menu coming soon!</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FeaturedDietMenu;
  