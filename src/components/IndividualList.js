import { useState } from 'react'
import IndividualCard from './IndividualCard'
import IndividualCardDetails from './IndividualCardDetails'
import './IndividualList.css'

const IndividualList = props => {
    const [cardDetails, setcardDetails] = useState(false)
    const addCard = () => {
        setcardDetails(true)
    }
    const closeCardDetails = () => {
        setcardDetails(false)
    }

    const cards = props.cards.map((card, index) => {
      return ( 
        <div key={index}>
          <IndividualCard {...card} onDragStart={props.onDragStart} />
        </div>
      );
    })
    return (
        <div className='List'>
            <div className="ListHeader">
                <div className="listname">
                    <span>{props.name}</span>
                </div>
                <div className="addboxesbutton">
                    <button onClick={ addCard}>
                        Add Card
                    </button>
                </div>
            </div>
            <hr />
            <div className="cardsList" draggable="true" onDragOver={props.onDragOver} onDrop={props.onDrop}>
                {cards}
                <div>
                <IndividualCardDetails isOpen={cardDetails}  formNum={props.listCount} onAdd={props.onAdd} close={closeCardDetails} />
            </div>
            </div>
            
        </div>
    )
}

export default IndividualList;