
import CodeViewer from "./CodeViewer"
export default async function CodePage({params,}:{params: {id:string }
}) {
  return <CodeViewer id={params.id} />
}       