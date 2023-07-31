import './index.css'

const HedingSection = (props)=>{

    const {gotoMainPage} = props

    const gotoMain = ()=>{
        gotoMainPage()
    }

    return (
        <div className='heading-secion-main-div'>
            <div className='heading-staring-secion'>
                <div className='back-sheet-img'>
                <i class="fa-solid fa-chevron-right fa-flip-horizontal"></i>
                </div>
                <div className='heading-secion-start-1 '>
                <i class="fa-regular fa-file-lines"></i>
                <p className='heading-1-sheet'>Sheets</p>
                </div>
                <div className='heading-secion-start-2'>
                <i class="fa-regular fa-file-lines"></i>
                <p className='heading-section-2p'>First Piece CTQ: Tube Press Up</p>

                </div>
            </div>
            <div className='heading-section-ending'>
                <div className='heading-section-ending-1'>
                    <p className='autho-hed-sec-2'>Authoring</p>
                </div>
                <div className='heading-section-ending-2'>
                    <p className='autho-hed-sec-2'>Preview</p>
                </div>
                <div>
                    <button className='button-finish-autho' onClick={gotoMain}>Finish Authoring</button>

                </div>

            </div>
        </div>
    )

}

export default HedingSection