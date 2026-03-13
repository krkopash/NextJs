import Spinner from "../../components/Spinner";

export default function AdminLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
      <Spinner size="lg"/>
      <p className="mt-4 text-indigo-600 font-semibold animate-pulse uppercase">
        Accessing Secure Data...
      </p>
    </div>
  );
}