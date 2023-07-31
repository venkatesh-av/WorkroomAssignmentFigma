import './index.css'

const SecondBodyCanva = (props)=>{

    const {setSelect,Selecting,setSelectReverse,canvaStatefun,canvaState,imagestate,imagefun,deleteFunc,itisTrue} = props

    const onClickSelect = ()=>{
            setSelect()
    }

        

    

 const deleteEntireField=()=>{
    setSelectReverse()
 }

 const displayTheCheckList = ()=>{
    canvaStatefun()

 }

 


    let hideThat=""
   
    

    const changeImage = ()=>{
        imagefun()
        
    }

    const deleteFun = ()=>{
        deleteFunc()
    }
    

    if(Selecting){
        hideThat = "hideThat"
    }

    

    return (
        <div className='canva-body-main-div'>
            <div className='fields-main-div'>
                <div>
                    <div className='border-for-all'>
                        <i class="fa-solid fa-pen-ruler fa-flip-horizontal"></i>
                        <p className='fields-para'>Fields</p>
                    </div>
                    <div className='fields-labels'>
                        <p className='labels-name'>Basic Fields</p>
                    </div>
                    <div className="labels-working">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-font" viewBox="0 0 16 16">
                        <path d="M10.943 4H5.057L5 6h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v6.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V4.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"/>
                        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                        </svg>
                        <p className='labels-name labels-name1'>Text</p>
                    </div>
                    <div  className='fields-labels'>
                        <p className='labels-name'>Selection Fields</p>

                    </div>
                    <div className="labels-working" onClick={displayTheCheckList}>
                    <i class="fa-regular fa-circle-check"></i>
                        <p className='labels-name labels-name1'>Checklist</p>
                    </div>
                    <div className="labels-working" onClick={changeImage} >
                    <i class="fa-regular fa-calendar-days"></i>
                        <p className='labels-name labels-name1'>Select Date & Time</p>

                    </div>
                    <div  className='fields-labels'>
                        <p className='labels-name'>Attachment Fields</p>
                    </div>
                    <div className="labels-working" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-plus" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
</svg>
                        <p className='labels-name labels-name1'>Upload Image</p>
                    </div>
                    <div  className='fields-labels'>
                        <p className='labels-name'>Layout</p>
                    </div>
                    <div className="labels-working" onClick={onClickSelect}>
                    <i class="fa-solid fa-table-cells-large"></i>
                        <p className='labels-name labels-name1'>Section</p>
                    </div>
                </div>
                
            </div>
            <div>
                <div className='canvas-middle-div'>
                    <div className='border-for-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                        </svg>
                        <p className='fields-para'>Canvas</p>
                    </div>
                    <div className='bo-sheets-here-container hidden-show' id={hideThat}>
                <i className="fa-solid fa-expand slectand-drop"></i>
                <p>no Sheets here Start Authoring</p>
                    </div>
                    <div className='secion-canva-editing'>
                {Selecting && (
                    <>
                    <div className='secion-canva-editing-delete'>
                    <p className='select01'>Section 01</p>
                    <p onClick={deleteFun} >...</p>
                </div>
                <div  className='secion-canva-editing-delete-dots'>
                    <p className='section-title'>Section Title</p>
             {itisTrue && (<button className="delete-field" onClick={deleteEntireField}> <i class="fa-regular fa-trash-can" ></i>Delete Field</button>)}       
                </div>
                <div>
                <p>Section description</p>
                </div>
                </>)}

                
            </div>
           {canvaState && Selecting &&
           (<div className='main-check-img-container'>
           <div className='check-list-card-item'>
                   <div className='component-verification'>
                   <p>1.Component Physical Verification</p>
                   <p>...</p>
                   </div>
                   <div className='ched-list-inner-card'>
                   <div className='check-lsit-card-item1'>
                   <i class="fa-regular fa-circle"></i>
                       <p className='check-for-dents'>Check for dents</p>
                       <i class="fa-solid fa-circle-minus"></i>
                   </div>
                   <div  className='check-lsit-card-item1'>
                   <i class="fa-regular fa-circle"></i>
                       <p className='check-for-dents'>Check for scratches</p>
                       <i class="fa-solid fa-circle-minus"></i>
                   </div>
                   <div className='addan-option'>
                   <i class="fa-solid fa-circle-plus"></i>
                       <p className='add-an-option'>Add an Option</p>
                   </div>
                   </div>
                   
               </div>

        {imagestate && (<div className='check-list-card-item'>
               <div className='image-field-title'>
                   <p>1.Field Title</p>
               </div>
               <div className='image-container'>

               <div>
                   <p>Integrate date picker (dd//mm//yyyy)</p>
               </div>

               </div>
               
           </div>)}   
           </div>)}
            

           </div>
            </div>
            <div>
                <div className='canvas-last-div'>
                    <div className='border-for-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                        </svg>
                        <p className='fields-para'>Controls</p>
                    </div>
                </div>
                <div className="labels-working">
                    <p className='labels-name'>Field: Checklist</p>
                </div>
                <div className="labels-working">
                    <p className='labels-name'>1. Component Physical Verification</p>
                </div>
                <div className="labels-working woking2">
                    <div className='woking2'>
                    <i class="fa-regular fa-circle"></i>
                        <p className='labels-name p222'>Required</p>
                    </div>
                    <div className='woking2'>
                        <p className='labels-name p222'>Trigger:</p>
                        <i class="fa-regular fa-circle"></i>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )

}


export default SecondBodyCanva