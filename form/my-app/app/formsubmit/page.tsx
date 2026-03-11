'use server'

import fs from "fs";
import path from "path";

interface FormDataEntry {
  name: string
  id: string
  course: string
}
const filePath = path.join(process.cwd(), "app/form/data.json")
const formSubmit = async (formData: FormData) => {
  const name = formData.get("name") as string
  const id = formData.get("id") as string
  const course = formData.get("course") as string
  const file = fs.readFileSync(filePath, "utf-8")
  const data: FormDataEntry[] = JSON.parse(file)
  data.push({ name, id, course })
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

}

export default formSubmit;