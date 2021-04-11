import { useState } from 'react'
import './IndividualCardDetails.css'
const IndividualCardDetails = ({ formNum, isOpen, close, onAdd }) => {
    const [classNameTitle, setClassNameTitle] = useState('title')
    const [classNameDescription, setClassNameDescription] = useState('description')
    const [cardDetails, setcardDetails] = useState({
        name: '',
        description: '',
        listNumber: formNum,
        id: ''
    })
    const closeModal = () => {
        setClassNameTitle('title')
            setClassNameDescription('description')
        setcardDetails({
            name: '',
            description: ''
        })
        close()
    }
    const handleDescriptionChange = event => {
        setcardDetails({
            ...cardDetails,
            description: event.target.value
        })
    }

    const handleNameChange = (event) => {
        let id = event.target.value + formNum
        setcardDetails({
            ...cardDetails,
            name: event.target.value,
            id: id
        })
    }
    const submitcardDetails = () => {
        if (cardDetails.description.length === 0 || cardDetails.name.length === 0)
        {
            setClassNameTitle('errorTitle')
            setClassNameDescription('errorDecription')
        }
        else
        {
            setClassNameTitle('title')
            setClassNameDescription('description')
            onAdd(cardDetails, formNum)
            setcardDetails({ })
            close()       
        }
    }

    if (isOpen) {
        return (
            <div className="AddCard">
                    <div className={classNameTitle}>
                        <input type="text" value={cardDetails.name} onChange={handleNameChange} />
                    </div>
                    <hr />
                    <div className={classNameDescription}>
                        <textarea  value={cardDetails.description} onChange={handleDescriptionChange} />
                    </div>
                    <div>
                <div className="buttons">
                    <button onClick={submitcardDetails}>
                        Submit Details
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

export default IndividualCardDetails;