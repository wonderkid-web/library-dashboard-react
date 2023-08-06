import { createContext, useContext, useState } from "react"; 
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import {storage} from "../../firebase.js"


export const adminContext = createContext()

export const AdminContextProvider = ({children}) =>{

    const uploadCover = async (file, setSrcImage, setLoading, fileName) =>{
        setLoading(true)
        const fileRef = ref(storage, `/cover/${fileName}`)
        
        await uploadBytes(fileRef, file)
        const photoURL = await getDownloadURL(fileRef)
        setSrcImage(photoURL)
        setLoading(false)
    }

    const getCoverUrlImg = async (bookName) =>{
        const fileRef = ref(storage, `/cover/${bookName}`)

        const photoURL = await getDownloadURL(fileRef)

        return {photoURL}
    }

    return(
        <adminContext.Provider value={{uploadCover, getCoverUrlImg}}>
            {children}
        </adminContext.Provider>
    )
}

export const useAdminContext = () =>{
    return useContext(adminContext)
}