import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import "./index.css"
// import PostsDisplay from '../PostsDisplay';

const list=[
  {"id":uuidv4(),
    "postName":"T20 WorldCup",
    "postDescription":"India has won t20 world cup 2024",
    "isEdit":false,
  }
]

const PostCreationPage = () => {
    const [postList,setPostList]=useState(list);
    const [postTitle,setPostTitle]=useState("");
    const [postDesc,setPostDesc]=useState("");
    const [isTrue,setTrue]=useState(false);

    const [title,setTitle]=useState()
   const [desc,setDesc]=useState()

    const onCreatePost=(e)=>{
      e.preventDefault()
        const newPost={
            "id":uuidv4(),
            "postName":postTitle,
            "postDescription":postDesc,
            "isEdit":false,
        }
        
        setPostList(prevState=>[...prevState,newPost],
           setPostTitle(""),
           setPostDesc(""),
           setTrue(false)
     )
    }

    
   
   const onClickEdit=(id)=>{
       setPostList(prevState=>prevState.map(each=>{
           if(each.id===id){
            setTitle(each.postName)
            setDesc(each.postDescription)
               return {...each,postName:title,postDescription:desc,isEdit:!each.isEdit}
           }
           return each
          }))
   }
   
    const onSaveData=(id)=>{
       console.log(id)
      setPostList(prevState=>prevState.map(each=>{
       if(each.id===id){
           return {...each,postName:title,postDescription:desc,isEdit:!each.isEdit}
          
       }
      
       return each
      }));
     
      
    }
    

   const changetoPostCreation=()=>{
        setTrue(true)
    }

  return (
    <div className='post-bg-card'>
        <div >{isTrue===true?<div className='create-page'>
        <header>
            <h1 className='heading'>Post Creation Page</h1>
        </header>
        <main>
          <form onSubmit={onCreatePost}>
            <label className='label' htmlFor='title'>Title</label>
            <input
              type='text'
              className='postTitle'
              value={postTitle}
              onChange={(e)=>setPostTitle(e.target.value)}
              id="title"
              placeholder='Enter the post title'
            />
            
            <label className='label' htmlFor='description'>Descriptiion</label>
            <textarea
              type='text'
              className='postDesc'
              cols={150}
              rows={5}
              value={postDesc}
              id="description"
              onChange={(e)=>setPostDesc(e.target.value)}
              placeholder='Enter the post Descriptiion'
            />
            <button className='create-button' type='submit'>Create Post</button>
            </form>
        </main>
        
    </div>:null}</div>
    <div className='display-page'>
                <div>
                    <h1 className='display-head'>Posts</h1>
                <div>
                    <ul>
                        {postList.map(post=>(
                            <li className='post' key={post.id}>
                                <>{post.isEdit===false?<h2 className='post-name'><span>TITLE</span> : {post.postName}</h2>:(
                                    
                                    <input
                                    type='text'
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    />
                                )}</>
                                <>{post.isEdit===false?<p className='post-desc'><span>DESCRIPTION</span> : {post.postDescription}</p>:(
                                    <input 
                                      type='text'
                                    value={desc}
                                    onChange={(e)=>setDesc(e.target.value)}
                                    />
                                )}</>
                                  <>{post.isEdit===false?<button className='edit' type='button' onClick={()=>onClickEdit(post.id)} >Edit</button>:null}</>
                                  <>{post.isEdit===true?<button className='save' type='button' onClick={()=>onSaveData(post.id)}>Save</button>:null}</>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                <button className='post-display-button' type='button' onClick={changetoPostCreation}>Show Post Creation Section</button>
                </div>
    </div>
  </div>
  )
}

export default PostCreationPage