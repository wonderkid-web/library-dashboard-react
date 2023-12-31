import { FaUsersGear } from "react-icons/fa6"
import { GiNotebook } from "react-icons/gi"
import { IoLogOutOutline } from "react-icons/io5"
import { TbBooks } from "react-icons/tb"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
      {/* SIDEBAR */}
      <div className="rounded-lg relative row-span-full col-start-1 bg-white p-2">

        <div className="logoMenu p-2 gap-2 absolute flex">
          <img src="/logo.jpeg" width={50} alt="" />
          <p className="font-bold text-lg self-center">Dashboard Admin</p>
        </div>

        <div className="centerMenu absolute w-[215px] top-[200px]">
          <ul className="menu bg-base-200 rounded-box">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <details open>
                <summary><TbBooks />Book Section</summary>
                <ul>
                  <li>
                    <Link to={'/book/add'}>Add Book</Link>
                  </li>
                  <li>
                    <Link to={'/book/remove'}>Remove Book</Link>
                  </li>
                  <li>
                    <Link to={'/book/manage'}>Library Book</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary><FaUsersGear />User Section</summary>
                <ul>
                  <li>
                    <Link target="_blank" to={`https://console.firebase.google.com/u/2/project/library-react-35bcb/authentication/users?hl=id`}>Manage User</Link>
                  </li>
                </ul>
              </details>

            </li>
            <li>
              <details>
                <summary><GiNotebook />Transaction Section</summary>
                <ul>
                  <li>
                    <Link to={'/transaction/loan'}>Loan Transaction</Link>
                  </li>
                  <li>
                    <Link to={'/transaction/return'}>Return Transaction</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="buttomMenu absolute bottom-0">
          <ul className="menu">
            <li>
              <a className="text-base-400"><IoLogOutOutline />Logout</a>
            </li>
          </ul>
        </div>

      </div>

    </>
  )
}

export default Sidebar