
const Navbar = () => {
    return (
        <>
            {/* NAVBAR */}
            <div className="navbar bg-base-100 rounded-lg row-start-1 col-span-2 bg-white">
                <div className="navbar-start">
                    <div className="w-10 mx-2 rounded-full">
                        <img src="https://th.bing.com/th/id/R.3d3291f99fb37665400552a4d2cb846e?rik=frIXYv71zsELXQ&riu=http%3a%2f%2fwww.frankfarms.com%2fassets%2fimages%2fRed_Apple.png&ehk=%2fGYtVMpZiPkGBog0ejEd7bDW6ofFCNCQsRpBUPAnc1o%3d&risl=&pid=ImgRaw&r=0" />
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Dashboard Library</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar