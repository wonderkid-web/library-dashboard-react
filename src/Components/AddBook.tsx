import { useState } from "react"
import { useAdminContext } from "../context/AdminContext"
import Table from "./Table"
import { Link, useLocation, useParams } from "react-router-dom"

const AddBook = () => {
  const [imgUrl, setImgUrl] = useState("https://thumb7.shutterstock.com/image-photo/redirected-150nw-1727544364.jpg")
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState()
  const [loading, setLoading] = useState(false)
  // const [extention, setExstention] = useState()
  const [coverUrl, setCoverUrl] = useState()

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

      <form onSubmit={(e) => { e.preventDefault() }}>
        <div className="space-y-12 w-1/2 mx-auto">
          <div className="border-b border-gray-900/10 pb-12">
            {/* HEADER */}
            <h2 className="font-semibold leading-7 text-sky-500 p-2 rounded-md">Tambah Buku</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Isi Data buku kamu di form ini!</p>


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
                    autoComplete="given-name"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="id-book" className="block text-sm font-medium leading-6 text-gray-900">
                  ID Book
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="id-book"
                    id="id-book"
                    autoComplete="family-name"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                  Author
                </label>
                <div className="mt-2">
                  <input
                    id="author"
                    name="author"
                    type="author"
                    autoComplete="author"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            {/* SUBMIT */}
            <button className="bg-yellow-700 text-white w-full mx-auto p-2 rounded-md mt-4">Submit</button>

          </div>
        </div>
      </form>

    </div>
  )
}

export default AddBook