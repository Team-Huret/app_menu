import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonContainer() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <Skeleton className="skeleton-rounded" />
        <Skeleton className="skeleton-header-row" />
      </div>
      <div className="skeleton-content">
        <Skeleton className="skeleton-title" />
        <div className="skeleton-entries-container">
          <Skeleton className="skeleton-entry" />
          <Skeleton className="skeleton-entry" />
          <Skeleton className="skeleton-entry" />
          <Skeleton className="skeleton-entry" />
          <Skeleton className="skeleton-entry" />
          <Skeleton className="skeleton-entry" />
        </div>
      </div>
    </div>
  );
}
