// https://github.com/transloadit/uppy
// npm install @uppy/react

import React , { Component, useState }  from 'react'
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
      .on('upload-success', (file, response) => {
        const formData = new FormData();
          formData.append('file', file);
          console.log(file);
      
          fetch('http://127.0.0.1:5000/prediction', {
            method: 'POST',
            body: formData
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              // setPrediction(data);
            });
          document.location.href = "/results-page"

        // const room_url = {{ url_for("room_detail", id=room.id)|tojson }}

      // });
      // .on('upload-success', (file, response) => {
      //   console.log(file.name, response.uploadURL);
      //   const img = new Image();
      //   img.width = 300;
      //   img.alt = file.id;
      //   img.src = response.uploadURL;
      //   document.body.appendChild(img);
});
      // .on('upload-success', (result) => {
      //     console.log('Upload result:', result)
      //   })

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

// const uppy = new Uppy({
//   meta: { type: "avatar" },
//   restrictions: { maxNumberOfFiles: 3 },
//   autoProceed: false
// });

// uppy.use(Tus, { endpoint: "https://httpbin.org/post" });

// uppy.on("complete", (result) => {
//   const url = result.successful[0].uploadURL;
//   // store.dispatch({
//   //   type: 'SET_USER_AVATAR_URL',
//   //   payload: { url },
//   // })
//   console.log(url);
// });

// export const UppyComponent = (props) => {
//   const uppy = React.useMemo(() => {
//     return new Uppy({
//       restrictions: { maxNumberOfFiles: 3 },
//       autoProceed: false
//     });
//   }, []);

//   React.useEffect(() => {
//     return () => uppy.close();
//   }, []);

//   return (
//     <div>
//       <Dashboard uppy={uppy} plugins={["DragDrop"]} {...props} />
//     </div>
//   );
// };



// const uppy = new Uppy({
//   meta: { type: "avatar" },
//   restrictions: { maxNumberOfFiles: 3 },
//   autoProceed: false
// });

// uppy.use(XHRUpload, { 
//         endpoint: 'http://localhost:3000/image',
//         fieldName: 'photo',
//         formData: true,
//      });

// uppy.on("complete", (result) => {
//   const url = result.successful[0].uploadURL;
//   // store.dispatch({
//   //   type: 'SET_USER_AVATAR_URL',
//   //   payload: { url },
//   // })
//   console.log(url);
// });

// export const UppyComponent = (props) => {
//   const uppy = React.useMemo(() => {
//     return new Uppy({
//       restrictions: { maxNumberOfFiles: 3 },
//       autoProceed: false
//     });
//   }, []);

//   React.useEffect(() => {
//     return () => uppy.close();
//   }, []);

//   return (
//     <div>
//       <Dashboard uppy={uppy} plugins={["DragDrop"]} {...props} />
//     </div>
//   );
// };


//////


// const uppy = new Uppy()
//     .use(XHRUpload, { 
//       endpoint: 'http://localhost:3000/image',
//       fieldName: 'photo',
//       formData: true,
//     });


// export default function UppyComponent () {
//   return <Dashboard uppy={uppy} />
// }


///// 


// const uppy = new Uppy()
//     .use(Dashboard, {
//         inline: true,
//         target: "#drag-drop-area",
//     })
//     .use(XHRUpload, { 
//         endpoint: 'http://localhost:3000/image',
//         fieldName: 'photo',
//         formData: true,
//      });

// function Uploader () {
//   const uppy = React.useMemo(() => {
//     return new Uppy()
//     .use(XHRUpload, { 
//       endpoint: 'http://localhost:3000/image',
//       fieldName: 'photo',
//       formData: true,
//     })
//   }, [])
//   React.useEffect(() => {
//     return () => uppy.close({ reason: 'unmount' })
//   }, [uppy])

//   return (
//     <Dashboard
//       uppy={uppy}
//       plugins={['XHRUpload']}
//       {...props}
//     />
//   )
// }


// const uppy = new Uppy({
//   meta: { type: "avatar" },
//   restrictions: { maxNumberOfFiles: 3 },
//   autoProceed: false
// });

// uppy.use(XHRUpload, { 
//   endpoint: 'http://localhost:3000/image',
//   fieldName: 'photo',
//   formData: true,
// });

// uppy.on("complete", (result) => {
//   const url = result.successful[0].uploadURL;
//   // store.dispatch({
//   //   type: 'SET_USER_AVATAR_URL',
//   //   payload: { url },
//   // })
//   console.log(url);
// });

// export const UppyComponent = (props) => {
//   const uppy = React.useMemo(() => {
//     return new Uppy({
//       restrictions: { maxNumberOfFiles: 3 },
//       autoProceed: false
//     });
//   }, []);

//   React.useEffect(() => {
//     return () => uppy.close();
//   }, []);

//   return (
//     <div>
//       <Dashboard uppy={uppy} plugins={["XHRUpload"]} {...props} />
//     </div>
//   );
// };
