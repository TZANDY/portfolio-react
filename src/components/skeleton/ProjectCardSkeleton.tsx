const ProjectCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="group bg-card rounded-lg overflow-hidden shadow-xs animate-pulse"
        >
          <div className="h-48 bg-muted/60" />

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.from({ length: 3 }).map((__, tagIndex) => (
                <span
                  key={tagIndex}
                  className="h-6 w-16 rounded-full bg-muted/60"
                />
              ))}
            </div>

            <div className="h-6 w-3/4 rounded bg-muted/60 mb-3" />
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full rounded bg-muted/60" />
              <div className="h-4 w-5/6 rounded bg-muted/60" />
              <div className="h-4 w-4/5 rounded bg-muted/60" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <div className="h-5 w-5 rounded-full bg-muted/60" />
                <div className="h-5 w-5 rounded-full bg-muted/60" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardSkeleton;