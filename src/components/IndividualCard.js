import './individualCard.css'
const IndividualCard = (props) => {
        return (
                <div className="Cards" draggable="true" id={[props.id]} onDragStart={props.onDragStart}>
                        <div>
                                <span>{props.name}</span>
                                <hr />
                        </div>
                        <div>
                                <span>{props.description}</span>
                        </div>
                        
                </div>
        )
    
}

export default IndividualCard;