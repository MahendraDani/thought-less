export const Navbar = ()=>{
  return <nav className="px-4 flex flex-row items-center justify-center">
      <div className="inline-flex justify-start items-center gap-2 text-foreground/70">
        <h3>thought<span className="line-through italic">less</span></h3>
        <h3 className="italic">{"- let go"}</h3>
      </div>
  </nav>
}