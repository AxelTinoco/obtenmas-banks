const LoaderData = () => {
  return (
    <div className="shadow rounded-md h-20 w-full mx-auto relative">
      <div className="animate-pulse flex w-full">
        <div className="flex-1 space-y-6 py-1 w-full">
          <div className="space-y-6">
            <div className="grid grid-cols-6 gap-8 justify-center">
              <div className="h-2 bg-slate-700 rounded col-span-4"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderData;
