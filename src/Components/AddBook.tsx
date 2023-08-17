import { useEffect, useId, useReducer, useRef, useState } from "react"
import { useAdminContext } from "../context/AdminContext"
import Table from "./Table"
import { set } from "firebase/database"

const AddBook = () => {
  const [success, setSuccess] = useState()
  const [error, setError] = useState()
  // const [imgUrl, setImgUrl] = useState("https://thumb7.shutterstock.com/image-photo/redirected-150nw-1727544364.jpg")
  // const [file, setFile] = useState()
  // const [fileName, setFileName] = useState()
  // const [loading, setLoading] = useState(false)
  // // const [extention, setExstention] = useState()
  // const [coverUrl, setCoverUrl] = useState()

  // const {pathname} = useLocation()


  // const handleCreateUser = async () => {
  //   await fetch('http://localhost:3006/createBook', {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     }

  //   })
  // }

  // const handleInputFile = async (e: any) => {
  //   if (e.target.files[0]) {
  //     const ext = e.target.files[0].name.split('.').pop()
  //     setFileName(e.target.files[0].name)
  //     setFile(e.target.files[0])
  //     setExstention(ext)
  //   }
  // }

  // const { uploadCover, getCoverUrlImg } = useAdminContext()


  const form = useRef()
  const reducer = (state: any, action: any) => {
    if (action.type === "input-active") {
      return {
        ...state,
        [action.input.name]: action.input.value
      }
    } else if (action.type === "clear") {
      return {}
    } else if (action.type === "success") {
      return {
        ...state,
        success: action.payload
      }
    } else if (action.type === "fail") {
      return {
        ...state,
        fail: action.payload
      }
    }
  }

  const initialVal = {}


  const [state, dispatch] = useReducer(reducer, initialVal)


  const handleChange = (e: any) => {
    dispatch({
      type: "input-active",
      input: {
        name: e.target.name,
        value: e.target.value
      }
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    form.current.reset()
    const data = await fetch('http://localhost:3006/addBook', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: state
      })
    })
    dispatch({
      type: 'clear'
    })

    if (data.ok) {
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false)
      },3000)
    } else {
      setError(true)
      setTimeout(()=>{
        setError(false)
      },3000)
    }

  }

  // const handleInput = e => {
  //   setInput(prev => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }


  return (
    <div className="col-span-2 row-span-2 ">

      {/* <img src={imgUrl} alt="" />
      <input onChange={(e) => handleInputFile(e)} type="file" />
      <br />
      <button disabled={loading ? true : false} onClick={() => {
        uploadCover(file, setImgUrl, setLoading, fileName)

      }} className="btn btn-info m-4 mx-auto">Create!</button>

      <button className="btn btn-warning" onClick={async () => {
        // console.log(fileName);

        const { photoURL } = await getCoverUrlImg(fileName)
        // console.log(photoURL);
        // console.log(fileName);

        setCoverUrl(photoURL)
      }}>Get URL</button>
      <img src={coverUrl} alt="" /> */}

      <form onSubmit={handleSubmit} ref={form}>
        <div className="space-y-12 w-1/2 mx-auto">
          <div className="border-b border-gray-900/10 pb-12">
            {/* HEADER */}
            <h2 className="font-semibold leading-7 text-sky-500 p-2 rounded-md">Tambah Buku</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Isi Data buku kamu di form ini!</p>


            {/*  */}


            {/* INPUT SECTION */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                  Title Book
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="bookId" className="block text-sm font-medium leading-6 text-gray-900">
                  ID Book
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="bookId"
                    id="bookId"
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="authors" className="block text-sm font-medium leading-6 text-gray-900">
                  Author
                </label>
                <div className="mt-2">
                  <input
                    id="author"
                    name="author"
                    type="author"
                    onChange={handleChange}
                    autoComplete="author"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                  Stock
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    min={0}
                    name="stock"
                    id="stock"
                    onChange={handleChange}
                    autoComplete="address-level2"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div className="sm:col-span-4">
                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                  Cover URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="image"
                    id="image"
                    onChange={handleChange}
                    autoComplete="address-level1"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    onChange={handleChange}
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>-Pilih Category-</option>
                    <option>Sciene</option>
                    <option>Biologi</option>
                    <option>Fisika</option>
                  </select>
                </div>
              </div>

            </div>


            {/* SUBMIT */}
            <button onClick={() => handleSubmit} className="bg-yellow-700 text-white w-full mx-auto p-2 rounded-md mt-4">Submit</button>

          </div>
        </div>
      </form>
      {
        success && (
          <div className="toast toast-start">
            <div className="alert alert-success">
              <span>Kamu berhasil menambahkan Buku.</span>
            </div>
          </div>
        )
      }
      {error && (
        <div className="toast toast-start">
          <div className="alert alert-info">
            <span>Kamu gagal menambahkan Buku.</span>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default AddBook