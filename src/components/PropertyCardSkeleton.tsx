import { Skeleton } from "@/components/ui/skeleton";

const PropertyCardSkeleton = () => (
  <div className="animate-fade-in">
    <Skeleton className="aspect-[4/3] rounded-[4px] mb-6" />
    <Skeleton className="h-4 w-3/4 mb-2" />
    <Skeleton className="h-3.5 w-1/3 mb-3" />
    <div className="flex gap-5">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-3 w-20" />
    </div>
  </div>
);

export default PropertyCardSkeleton;
