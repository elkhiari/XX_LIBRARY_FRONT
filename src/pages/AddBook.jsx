import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import CoverError from '../assets/images/cover-error.png';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import Model from '../components/utils/Model';

function AddBook() {
  const [file,setFile] = useState(null)
  const [categoriesArray, setCategoriesarray] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const [cover, setCover] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState(false);
  const [Url, setUrl] = useState('');
  const {error,setError,typeError,setTypeError,token} = useContext(AuthContext)
  const [hidden, setHidden] = useState(false);
  const {loading, setLoading} = useContext(AuthContext)
  const [categoriesName, setCategoriesName] = useState();
  const navigate = useNavigate();

  // i need when i choose a category to get the name of the category from array and set it to categoriesName
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

  const handleSubmit = async (e) => {
    setTypeError('red')
    if(!title || !author || !categories || !cover || !description || !pages)
    {
      setError('Please fill all the fields')
      return;
    }
    if(title.length < 3 || title.length > 100)
    {
      setError('Title must be between 3 and 100 characters')
      return;
    }
    if(author.length < 3 || author.length > 100)
    {
      setError('Author must be between 3 and 100 characters')
      return;
    }
    if(description.length < 3 || description.length > 10000)
    {
      setError('Description must be between 3 and 10000 characters')
      return;
    }
    if(pages < 1 || pages > 10000)
    {
      setError('Pages must be between 1 and 10000')
      return;
    }
    setError("")
    setTypeError("")

      e.preventDefault();
      try {
        const book = { title, author, categories, cover, description, pages,Url };
        const response = await axios.post(process.env.REACT_APP_API_URL + '/books', book,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setError("thanks for your time, Book added successfully")
        navigate('/')
      } catch (error) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
        

      }
  }

  return (

    <div className={`min-h-screen  w-full  syne py-16 flex justify-center place-items-center  pb-32 `}>
       {hidden && <div className={`min-h-screen transition-opacity duration-300 fixed   w-full bg-gray-400/30 dark:bg-white/30    z-40 py-16 top-0  flex place-content-center place-items-center `}> <Model hidden={hidden} setHidden={setHidden} cover={cover} setCover={setCover} setUrl={setUrl} /> </div>}
      
       <div className={`${hidden && "blur-sm"} container max-w-3xl  px-3 py-4 `}>
       <div>
          <h1 className="text-4xl  font-bold ">Add Book</h1>
          <p className="">Add your book to the library</p>
       </div>
       <div className=' md:flex md:space-x-5  space-y-5 md:space-y-0'>
        <div className='md:w-2/3  flex flex-col justify-between'>
        <input 
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Title" />
       <input 
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Author" />
        
          <select   
          onChange={(e) => setCategories(e.target.value)}
          className="block capitalize border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            <option selected>Choose a category</option>
            {categoriesArray.map((category,index) => (
              <option value={category._id} key={index} >{category.name}</option>
            ))}
          </select>
        <input 
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    
              placeholder="Description" />
        <input 
              onChange={(e) => setPages(e.target.value)}
              type="number"
              className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="pages" />
            <div className='flex justify-between items-center space-x-5'>
            <button
                        onClick={handleSubmit}
                        type="button"
                        className="w-full text-center  py-3 rounded bg-blue-400  hover:bg-blue-600 hover:tracking-widest  duration-150 ease-in-out hover:scale-105 text-white hover:bg-green-dark focus:outline-none "
                    >
                      {loading === false?"Add Book":
                        <div className="flex justify-center">
                            <svg class="w-8 h-8 animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4.75V6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M19.25 12L17.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 17.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M6.25 12L4.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                      }
                        
              </button>
              <button onClick={()=>{setHidden(true)}} className="w-full text-center  py-3 rounded bg-blue-600  hover:bg-blue-800 hover:tracking-widest  duration-150 ease-in-out hover:scale-105 text-white hover:bg-green-dark focus:outline-none">
                Upload Media
                <AiOutlineCloudUpload className='inline-block ml-2 w-6 h-6' />
                </button>
            </div>
        </div>
       <div className='h-full md:w-1/3 flex md:block justify-arround'>
        <div className='md:hidden w-1/2 flex place-content-center place-items-center '>
          This is demo of the book cover :
        </div>
       <div className='w-1/2 md:w-auto flex place-content-center place-items-center md:block'>
       <div className={`rounded shadow-2xl hover:shadow-sm  w-[220px] h-[350px]  md:h-auto md:w-auto  relative hover:scale-105 duration-150 hover:border-2 border-solid dark:border-white border-black`}>
      
      <div className="group overflow-hidden">
          <img
              className="object-cover w-[220px] h-[350px] md:h-auto md:w-auto filter transition-all duration-300 ease-in-out group-hover:blur-sm rounded shadow-lg"
              src={cover || CoverError}
              alt="cover"
          />
          <h1 className="p-2 text-blue-500 text-sm  syne absolute bottom-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {title.length > 50 ? title.substring(0, 50) + '...' : title}
          </h1>
          <h1 className="p-2 syne absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{categoriesName}</span>
          </h1>
      </div>
       </div>
    </div>
       </div>
       </div>
       </div>
    </div>
  )
}

export default AddBook