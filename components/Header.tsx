
export default function Header() {
  return (
    <header className="fixed z-50 h-16 w-full flex flex-col justify-center items-center backdrop-blur-xl">
        <nav className="h-full w-11/12 flex flex-row justify-between items-center">
            <p className="text-lg text-primary font-mont">ESC</p>

            <div className="w-3/5 h-full flex flex-row justify-between items-center">
                <ul className="text-white flex flex-row justify-around items-center w-full">
                    <li>Videos</li>
                    <li>Organization</li>
                    <li>Goals</li>
                    <li>Funding</li>
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <button className="text-white h-10 w-32 border-2 border-primary rounded-full">button</button>
                </div>
            </div>
        </nav>
    </header>
  )
}
