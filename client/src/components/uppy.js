// https://github.com/transloadit/uppy
// npm install @uppy/react

import React , { Component }  from 'react'
import { Link } from "react-router-dom";

import Uppy from '@uppy/core'
import XHRUpload from '@uppy/xhr-upload'
import Webcam from '@uppy/webcam'
import Tus from "@uppy/tus";
import Dashboard from '@uppy/dashboard'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

import {Button} from "reactstrap";


import { DashboardModal } from '@uppy/react'

export class UppyComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false,
    }

    this.uppy = new Uppy()
      .use(XHRUpload, { 
        endpoint: 'http://127.0.0.1:5000/prediction',
        // endpoint: 'http://localhost:3001/image',
        fieldName: 'photo',
        formData: true, })
      .on('upload-success', (result) => {
          console.log('Upload result:', result)
        })

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentWillUnmount () {
    this.uppy.close({ reason: 'unmount' })
  }

  handleOpen () {
    this.setState({
      modalOpen: true,
    })
  }

  handleClose () {
    this.setState({
      modalOpen: false,
    })
  }

  render () {
    return (
      <div>
        {/* <h1>Upload</h1> */}
        <Button 
        className="nav-link d-none d-lg-block"
        color="primary"
         onClick={this.handleOpen}
         > 
         <i className="tim-icons icon-cloud-upload-94" /> Analyze Image
         </Button>
        <DashboardModal
          uppy={this.uppy}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        />
      </div>
    )
  }
}