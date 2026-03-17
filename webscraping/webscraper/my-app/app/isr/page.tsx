
export const revalidate = 5;

export default async function Page() {
  const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata", {
    next: { revalidate: 10},
  });
  const data = await res.json();
  return (
    <div>
      <h1>ISR Demo</h1>
      <p>{data.dateTime}</p>
    </div>
  );
}