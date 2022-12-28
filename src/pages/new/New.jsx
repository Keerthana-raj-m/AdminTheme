import React, { useState } from 'react';
import "./New.scss";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {

  const [file, setFile] = useState()


  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h2 className='new-title'>{title}</h2>
          </div>
          <div className="bottom">
            <div className="left">
            <img src={file ? URL.createObjectURL(file)
             : "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
            alt=''
            />
            </div>
            <div className="right">
             <form>
              <div className="formInput">
                <label htmlFor='file'>
                 Image: <DriveFolderUploadIcon className='icon'/>
                  </label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}


              
              <button>Submit</button>
             </form>
            
             </div>
          </div>
        </div>
      </div>
    
  )
}

export default New
