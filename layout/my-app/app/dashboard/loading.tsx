import Spinner from "../components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <Spinner size="lg" />
      <p className="mt-4 text-gray-500 font-medium animate-pulse uppercase">
        Loading Dashboard...
      </p>
    </div>
  );
}
