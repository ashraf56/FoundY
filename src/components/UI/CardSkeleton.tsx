import { Card } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
import React from 'react';

const CardSkeleton = () => {
    return (
        <div>
      <Card className="h-[300px] w-full space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"> </div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"> </div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"> </div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-3 w-2/5 rounded-lg bg-default-300"> </div>
        </Skeleton>
      </div>
    </Card>
        </div>
    );
};

export default CardSkeleton;