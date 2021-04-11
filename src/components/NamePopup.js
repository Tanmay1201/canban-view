import {useState} from 'react'
import './NamePopup.css'
const NamePopup = ({ isOpen, isClose,setListName }) => {
    const [name, setName] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    const closeModal = () => {
        setName('')
            seterrorMessage('')
        isClose()
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const submitName = () => {
        if (name.length > 20 || name.length === 0)
        {
            seterrorMessage('Name of the List should be beween 0 and 20 characters')
        }
        else
        {
            setListName(name)
            setName('')
            seterrorMessage('')
            isClose()    
        }
        
    }

    if (isOpen) {
        return (
            <div className='modal display-block'>
                 
                <div className="modal-main">
                    <div>
                        <span className="error">{errorMessage}</span>
                   </div>
                    <div className="nampopupbutton">
                        <input type="text" value={ name} onChange={ handleNameChange}/>
                        <button onClick={submitName}>
                            Submit Name
                        </button>
                        <button onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
            
        )
    }
    else
    {
        return null    
    }
    
}

export default NamePopup;