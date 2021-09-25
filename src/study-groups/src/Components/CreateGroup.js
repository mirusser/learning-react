import React from 'react'
import Dropzone from 'react-dropzone'
import xlsxParser from 'xlsx-parse-json'

const CreateGroup = ({ createGroup }) => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) =>
        xlsxParser.onFileSelection(acceptedFiles[0]).then((data) => {
          console.log(data)
          data.Arkusz1.map((d) => (d.groupName = acceptedFiles[0].name))
          createGroup(data.Arkusz1)
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
