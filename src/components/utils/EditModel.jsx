import React, { useContext, useEffect, useState } from 'react'
import {TiDelete} from 'react-icons/ti'
import {TbWorldUpload} from 'react-icons/tb'
import {IoIosAlert} from 'react-icons/io'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'

function Model({setHidden,book,getPosts}) {
    const [frominput, setFrominput] = useState(null)
    const [cover, setCover] = useState(book.cover)
    const [url, setUrl] = useState(book.url)
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [description, setDescription] = useState(book.description)
    const [pages, setPages] = useState(book.pages)
    const [categories, setCategories] = useState(book.categories._id)
    const [categoriesName, setCategoriesName] = useState();
    const [categoriesArray, setCategoriesarray] = useState([]);

    
    const {token,error,setError,typeError,setTypeError} = useContext(AuthContext)
    const [file,setFile] = useState(null)
    useEffect(() => {
        if(file){
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => setCover(reader.result);
          reader.onerror = error => console.log(error);
        }
      }, [file])

      const handleImageError = () =>{
        setCover("")
        setFile(null)
        setTypeError("red")
        setError("image Error ! , please Provide valid url or image")
      }
      const getCategoriesName = () => {
        categoriesArray.map((category) => {
          if (category._id === categories) {
            setCategoriesName(category.name);
          }
        })
      }
      useEffect(() => {
        getCategoriesName();
      }, [categories])
    
      const getCategories = async () => {
        try {
          const response = await axios.get(process.env.REACT_APP_API_URL + '/categories');
          setCategoriesarray(response.data.categories);
        }
        catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
          getCategories();
      },[])

      const handleSubmit = async () => {
        if(!title || !author || !categories || !cover || !description || !pages)
        {
            setError('Please fill all the fields')
            return;
        }
        if(title.length < 3 || title.length > 1000)
        {
            setError('Title must be between 3 and 1000 characters')
            return;
        }
        if(author.length < 3 || author.length > 1000)
        {
            setError('Author must be between 3 and 100 characters')
            return;
        }
        if(description.length < 3 )
        {
            setError('Description must be greater than  3 ')
            return;
        }
        if(pages < 1 || pages > 10000)
        {
            setError('Pages must be between 1 and 10000')
            return;
        }
        
        const data = {
            title,
            author,
            description,
            pages,
            categories,
            cover,
            url
        }
        try {
            const response = await axios.patch(process.env.REACT_APP_API_URL + '/books/book/'+book._id,data,{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            getPosts()
            setHidden(false)
            setError("updated success")
            setTypeError("")
    }
    catch (error) {
        console.log(error);
    }
    }

    const HandleDelete = async () => {
        try {
            const response = await axios.delete(process.env.REACT_APP_API_URL + '/books/book/'+book._id,{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            getPosts()
            setError("Deleted success")
            setTypeError("red")
            setHidden(false)
    }
    catch (error) {
        console.log(error);
    }
    }



      
  return (
   

<div   className={`z-40 w-full ease-in bg-gray-500/50 backdrop-blur-sm fixed left-0 top-0 place-items-center flex  p-4 overflow-x-hidden overflow-y-auto md:inset-0  h-screen`}>
    <div className="relative container max-w-3xl max-h-full mx-auto  place-content-center place-items-center">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button type="button" onClick={()=>{setHidden(false)
                setError("")
                setTypeError("")}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            
            <div className="py-6 px-2 space-y-6">
                {cover && 
                <>
                <div className={` bg-gray-300 text-white mx-auto  h-[350px] w-[250px]  relative`}>
                    <img src={cover} alt="" onError={handleImageError} className={` h-full object-cover  rounded-md  mx-auto shadow-lg`}/>
                    <div className='text-lg flex place-content-center  place-items-center top-3 w-full   absolute rounded-full'>
                    <TiDelete className='w-[30px] h-[30px]  cursor-pointer duration-150 hover:scale-110' onClick={()=>setCover("")} />
                    </div>                    
                </div>
                </>}
                {!cover && <><div className='space-y-2'>
                    <label htmlFor="Cover" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Cover <span className='text-red-400'>*</span></label>
                <div className='relative'>
                <input 
                onChange={(e) => setFrominput(e.target.value)}
                value={frominput}
                type="text"
                name="Cover"
                id="Cover"
                className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="From web" />
                <button onClick={()=>setCover(frominput)} className='text-blue-500 hover:bg-blue-600 w-6 h-6 place-content-center place-items-center flex hover:text-white duration-200 rounded absolute top-1/2 -translate-y-1/2 right-4'>
                    <TbWorldUpload />
                </button>

                </div>
                </div>
                
                <div>
                <div className="flex items-center justify-center w-full">
                    <label htmlfor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> from Local</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
                        </div>
                        <input id="dropzone-file" type="file" onChange={(e)=>{setFile(e.target.files[0])}} className="hidden" />
                    </label>
                </div> 
                </div>
                </>}

            </div>
            <div className="py-3 px-2 space-y-6">

                <div className='space-y-2'>
                    <input 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    name="title"
                    id="title"
                    className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Title" />
                </div>
                
                <div clTbFileDescriptionssName='space-y-2'>
                    <input 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="description" />
                </div>

                <div className='space-y-2'>
                <select   
                    onChange={(e) => setCategories(e.target.value)}
                    value={categories}
                    className="block capitalize border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <option selected>Choose a category</option>
                        {categoriesArray.map((category,index) => (
                        <option value={category._id} key={index} >{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2'>
                    <input 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    type="text"
                    className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="author" 
                    />
                </div>
                
                <div className='space-y-2'>
                    <input 
                    onChange={(e) => setPages(e.target.value)}
                    value={pages}
                    type="text"
                    className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="page" />
                </div>

        
            </div>
            
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={()=>{handleSubmit()}} type="button"  className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `}>update</button>
                <button onClick={()=>{HandleDelete()}} type="button"  className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 `}>Delete</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Model