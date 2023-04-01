
import Editor from '@monaco-editor/react'
import React, { useState } from 'react'
// import Editor from "@monaco-editor/react";

const Mainface = () => {
    window.addEventListener('beforeunload', function(e) {
       
        e.preventDefault();
        e.returnValue = 'are you sure ';
       
      });
      
    const [HTML, setHTML] = useState('')
    const [CSS, setCSS] = useState('')
    const [JS, setJS] = useState('')
    const [active, setactive] = useState('')

    const IFMCODE = `
  <html>
  <head></head>
  <style>
  ${CSS}
  </style>
  <body>
  ${HTML}

  <script>
  ${JS}
  </script>
  </body>

  </html>
  `
    return (
        <div style={{
            padding: '20px'
        }}>
            <h1 style={{
                fontSize:'1.5rem',
                width:'100%',
                border:'solid 1px',
                background:'#333',
                color:'white',
                borderRadius:'0.2rem'
            }}>Online Compiler</h1>
            <div className='MANCON' style={{
                // display: 'flex', border:'solid 1px black', height:'90vh'

            }}>
               
                {/* {edditor} */}
                <div className='texAra'
                    style={{ width: '100%' }}
                >
                    <div className="buttonCL" style={{
                        textAlign:'left'
                    }}>
                    <button onClick={() => setactive('HTML')} style={{
                        color: active === 'HTML' ? 'white' : 'black',
                        backgroundColor: active === 'HTML' ? '#333' : 'white',
                        border:'solid 1px black',
                        padding:'10px 20px',
                        margin:'1rem'
                    }}><b>HTML</b></button>
                    <button onClick={() => setactive('CSS')} style={{
                                                color: active === 'CSS' ? 'white' : 'black',
                                                backgroundColor: active === 'CSS' ? '#333' : 'white',
                        border:'solid 1px black',
                        padding:'10px 20px',
                        margin:'1rem'
                    }}><b>CSS</b></button>
                    <button onClick={() => setactive('JS')} style={{
                                                color: active === 'JS' ? 'white' : 'black',
                                                backgroundColor: active === 'JS' ? '#333' : 'white',
                        border:'solid 1px black',
                        padding:'10px 20px',
                        margin:'1rem'
                    }}><b>JS</b></button>
</div>
<hr style={{border:'solid 1px'}} />
                    <br />
                    {active === 'HTML' && 
                    <Editor
                    height="50vh"
                    value='//HTML'
                   style={{
                   
                   }}
                    onChange={(value)=>setHTML(value)}
                    defaultLanguage="html"
                    defaultValue={HTML}
                  />
                 

                }

                    {
                        active === 'CSS' &&
<Editor
     height="50vh"
     value='/*CSS*/'
     onChange={(value)=>setCSS(value)}
     defaultLanguage="css"
     defaultValue={CSS}
   />                    }
                    {active === 'JS' && 
                     <Editor
                     height="50vh"
                     value='//JAVA SCRIPT'
                     onChange={(value)=>setJS(value)}
                     defaultLanguage="javascript"
                     defaultValue={JS}
                   />
                    
                        }

                </div>
                <div style={{
                    height:'90vh',
                    width:'100%',
                    border:'solid 0.9px black'
                }}>
                    <iframe width='100%' height='100%' srcDoc={IFMCODE} />
                </div>


            </div>
        </div>
    )
}

export default Mainface