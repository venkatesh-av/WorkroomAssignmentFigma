import './index.css'

const PopUpItem =(props)=>{


    const {changePopItem,nextItem,geTheSecondPage} = props

    const nextPopUp=()=>{

        changePopItem()

    }

    const onClickStartAuthoring = ()=>{
        geTheSecondPage()
    }

    const onClickAddText = ()=>{
        document.getElementById("sheetName").value = "First Piece CTQ: Tube Press Up"
        document.getElementById("sheetDes").value = "Producion Batch Inspection of Tube Press Up: First Piece"
    }

    const addTheOption = ()=>{
        document.getElementById("displayHide").style.display = 'block'
    }

    const addTheOption2 = ()=>{
        document.getElementById("displayHide2").style.display = 'block'
    }
    
    const addTheContent = ()=>{

        document.getElementById("paraElement").textContent = "Light Duty Line"
        document.getElementById("displayHide").style.display='none'

    }

    const addTheContent2 = ()=>{

        document.getElementById("paraElement2").textContent = "Press Up Station"
        document.getElementById("displayHide2").style.display='none'

    }
    



    return nextItem ? (
        <div className='next-item-main-div'>
            <div>
            <div className='new-sheet-Details-bg'>
                <p>New Sheet Details</p>
            </div>
            <hr className='next-item-hr'/>
            <div className='next-item-bottom-container'>
            
            <label htmlFor="sheetName">sheet Name</label>
            <br/>
            <input type="input" className='input-sheet-name' id="sheetName" onClick={onClickAddText}/>
            <br/>
            <label htmlFor="sheetDes">sheet Description</label>
            <br/>
            <input type="input" className='input-sheet-name' id="sheetDes"/>
            </div>
            <div className='asset-sub-assest-container'>
                <div>
                <label>Asset</label>
                <br/>
                <div  onClick={addTheOption} className='asset-div input-sheet-name select-assest' id="sheetSelect"><p id="paraElement"></p><i class="fa-solid fa-chevron-down"></i></div>
               
                <div  className="dis-hide" id="displayHide">

                <option className='heavey-duty-cycle'>Heavy Duty Line</option>
                <option className='heavey-duty-cycle1' onClick={addTheContent}>Light Duty Line</option>

                </div>
                
                </div>
                <div>

                <label>Sub-Assest
                </label>
                <br/>
                <div  onClick={addTheOption2} className='asset-div input-sheet-name select-assest' id="sheetSelect2"><p id="paraElement2"></p><i class="fa-solid fa-chevron-down"></i></div>
                <div  className="dis-hide" id="displayHide2">
                <option className='heavey-duty-cycle' onClick={addTheContent2}>Press Up Station</option>
                <option className='heavey-duty-cycle1' >Knockdown Station</option>
                </div>
                </div>
                
            </div>
            
            </div>
            <div className='start-Authoring-button'>
            <button className='author-new-sheet' onClick={onClickStartAuthoring}>Start Authoring</button>
            </div>
        </div>
            
    ):(<div className="popup-container-main">
    <div className='card-pop-div'>
    <p>How do you want to start?</p>
    <div className='card-items-flex'>

    <div>
        <button className='button-author-from-scratch' onClick={nextPopUp}>
        <i class="fa-solid fa-expand slectand-drop athor-scratch-color"></i>
        </button>
    
        <h1>Author from Scratch</h1>
        <p>Build a sheet by dragging & dropping usgin the authoring module, from scratch</p>
    </div>
    <div>
    <button className='button-author-from-scratch'>
        <i class="fa-solid fa-expand slectand-drop athor-scratch-color"></i>
        </button>
        <h1>Author from Scratch</h1>
        <p>Build a sheet by dragging & dropping usgin the authoring module, from scratch</p>
    </div>


    </div>
    </div>
    
</div> )
}

export default PopUpItem