import './index.css'

const Topsection = ()=>{

    return (
        <div className="side-bar-main-container">
            
            <button type="button"><i class="fa-solid fa-house"></i></button>
            <hr className="home-hr"/>

            <button type="button"><i class="fa-solid fa-clock-rotate-left"></i></button>
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg></button>
            <div className="button-pencil-bg">
            <button type="button " className="button-style-scale"><i class="fa-solid fa-pen-ruler fa-flip-horizontal button-selected"></i></button>
            <hr/>
            </div>
            

        </div>
    )
}

export default Topsection