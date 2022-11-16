import React,{useState} from 'react'
import { useDropzone } from 'react-dropzone'

const styles ={
    container: "",
    image : "w-[200px]"
}



function DragNDrop(props) {

  const[files,setFile] = useState([])

    const{getRootProps,getInputProps} = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) =>{
            setFile(
              acceptedFiles.map((file) => 
                Object.assign(file, {
                preview: URL.createObjectURL(file)
              }))
            )
        }
    }) 

    const images = files.map((file) => (
      <div key={file.name}>
        <div>
          <img src={file.preview} className = {styles.image} alt="preview" />
        </div>
      </div>
    ))

  return (
    <div className={styles.container + " " + props.classes}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>{props.message}</p>
      </div>
      <div>{images}</div>
    </div>
  )
}

export default DragNDrop