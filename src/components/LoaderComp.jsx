import { Loader2 } from "lucide-react";
function LoaderComp() {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-1 rounded-full bg-gray-100 p-4 text-gray-700">
      <Loader2 className="animate-spin" /> Loading
    </div>
  );
}

export default LoaderComp;
