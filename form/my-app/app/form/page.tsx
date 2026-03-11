'use client';
import formSubmit from "../formsubmit/page";
import formData from './data.json'

export default function Page() {
  return (
    <div className="flex gap-10 m-6">
      <form action={(e) => formSubmit(e)}>
                  <label className="block">Name</label>
          <input type="text" name="name" required
            className="border"/>

          <label className="block">Id</label>
          <input type="text" name="id" required
            className="border"/>
        
          <label className="block">Course</label>
          <input type="text" name="course" required
            className="border"/><br/><br/>
          <button>
          Submit
        </button>
      </form>
    
      <table className="border overflow-hidden">
        <thead>
          <tr>
            <th className="px-6 py-3 border">Name</th>
            <th className="px-6 py-3 border">Id</th>
            <th className="px-6 py-3 border">Course</th>
          </tr>
        </thead>

        <tbody>
          {formData.map((data: any, key: any) => (
            <tr key={key}>
              <td className="px-6 py-3 border">{data.name}</td>
              <td className="px-6 py-3 border">{data.id}</td>
              <td className="px-6 py-3 border">{data.course}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}