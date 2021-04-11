import './Header.css'
const Header = props => {
    console.log(props)
    const {increaseCounter} =  props
    const addList = () => {
            increaseCounter();
        }

    return (
        <div className='Header'>
            <div className="Title">
                <span>CANBAN BOARD</span>
            </div>
            <div className="NewListButton">
                <button onClick={ addList}>Add New List</button>
            </div>
        </div>
    )
}

export default Header