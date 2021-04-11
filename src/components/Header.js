import './Header.css'
const Header = props => {
    console.log(props)
    const {increaseCounter} =  props
    const addList = () => {
            increaseCounter();
        }
    const deleteItems = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className='Header'>
            <div className="Title">
                <span>KANBAN BOARD</span>
            </div>
            <div className="NewListButton">
                
                <div className="addNewList">
                    <button onClick={addList}>Add New List</button>
                </div>
                <div className="deleteLocalStorage">
                    <button onClick={deleteItems}>Delete Local Storage</button>
                </div>
                
            </div>
        </div>
    )
}

export default Header