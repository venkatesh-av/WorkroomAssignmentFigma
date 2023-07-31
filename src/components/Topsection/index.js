import './index.css'

const Topsection = ()=>{

    return (
        <div className='top-secion-main-bg'>
            <div className='top-secion-logo-secion'>
                <img src="https://media.licdn.com/dms/image/C4D0BAQEBpZZ4yna6xg/company-logo_200_200/0/1650692258876?e=1698883200&v=beta&t=cvy-pFZG3dS8CvmHGvXbWiZcMJYrzEv__hBvOnwaBxI" alt="main-top-av-logo" className='logo-top-section'/>
                <h1 className='workroom-style'>Workroom</h1>
                <h1 className='ciq-system'>CTQ System</h1>
            </div>

            <div className='top-secion-logo-secion'>
            <i class="fa-solid fa-bell top-section-rightside-icons"></i>
            <i className='fa-solid fa-user top-section-rightside-icons top-secion-logo-secion-profile'></i>
                <div>
                    <p className='profile-name'>Venkatesh</p>
                    <p className='surname'>Amajala</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Topsection