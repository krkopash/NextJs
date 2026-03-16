export default function ResultCard({ data }: any) {
  if (!data) return null;

  return (
    <div className="border p-4 mt-6 rounded">
      <h2 className="text-xl font-bold mb-3">Performance Result</h2>

      <p>Load Time: {data.loadTime} ms</p>
      <p>Page Size: {data.pageSize} bytes</p>
      <p>Images: {data.images}</p>
      <p>Scripts: {data.scripts}</p>
    </div>
  );
}