import React from 'react'
import Dropzone from 'react-dropzone'
import xlsxParser from 'xlsx-parse-json'

const CreateGroup = () => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) =>
        xlsxParser.onFileSelection(acceptedFiles[0]).then((data) => {
          //var parsedData = data
          console.log('data: ', data)
        })
      }
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='drop-zone'>Drop file here</div>
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default CreateGroup
