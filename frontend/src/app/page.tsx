import Sidebar from "./components/sidebar/Sidebar"
import Main from "./components/main/Main"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-96 bg-indigo-950 text-zinc-100" >
          <Sidebar/>
        </aside>
        <main className="flex-1 text-zinc-900 p-10 bg-zinc-300" >
          <Main/>
        </main>
      </div>
    </div>
  )
}
