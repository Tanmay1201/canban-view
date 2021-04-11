import { useState, useEffect } from 'react'
import Header from "./Header"
import IndividualList from "./IndividualList"
import NamePopup from './NamePopup'
import './IndexPage.css'

const IndexPage = () => {

    const [listCount, setlistCount] = useState(0)
    const [namePopup, setNamePopup] = useState(false)
    const [AllLists, setAllLists] = useState([])
    
    useEffect(() => {
        if (localStorage.getItem('AllLists')) {
            console.log('Inside')
            const rawList = localStorage.getItem('AllLists');
            console.log(rawList)
            const parsedList = JSON.parse(rawList);
            setAllLists(parsedList)
        }
    }, [])
    const onDragStart = (e, fromList) => {
        console.log(e.currentTarget.id)
        const dragInfo = {
            taskId: e.currentTarget.id,
            fromList: fromList
        }
        console.log('this is draginfotaskId' + dragInfo.taskId)
        console.log('this is draginfofromList' + dragInfo.fromList)
        localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
    }
    const onDragOver = (e) => {
        e.preventDefault();
    }
    const onDrop = (e, listNum) => {
        console.log('Inside')
        const droppedTask = localStorage.getItem('dragInfo');
        const parsedDragInfo = JSON.parse(droppedTask);

        const rawAllLists = localStorage.getItem('AllLists');
        const parsedAllLists = JSON.parse(rawAllLists);
        console.log(parsedAllLists)
        const cardsArray = parsedAllLists[parsedDragInfo.fromList].cards
        console.log('cardsarray' + cardsArray)
        const taskCard = cardsArray.find(card => card.id === parsedDragInfo.taskId)
        const indexOfCard = cardsArray.findIndex(card => card.id === parsedDragInfo.taskId)
        parsedAllLists[parsedDragInfo.fromList].cards.splice(indexOfCard, 1)
        parsedAllLists[listNum].cards.push({...taskCard, listNumber: parseInt(listNum)})
    
        setAllLists(parsedAllLists)
        localStorage.setItem('AllLists', JSON.stringify(parsedAllLists));
        
    }
    const increaseCounter = () => {
        setNamePopup(true)
    }
    const isClose = () => {
        setNamePopup(false)
    }
    
    const setListName = (name) => {
        if (listCount === 0)
        {
            let id = name + listCount
            const newList = {
                name,
                id,
                cards: [],
                listCount
            }
            let tempList = AllLists.concat(newList)
            console.log(tempList)
            setAllLists(tempList)
            localStorage.setItem('AllLists', JSON.stringify(tempList))
            setlistCount(listCount+1)
        }
        else 
        {
            const rawAllLists = localStorage.getItem('AllLists');
            const parsedAllLists = JSON.parse(rawAllLists);
            let id = name + listCount
            const newList = {
                name,
                id,
                cards: [],
                listCount
            }
            parsedAllLists.push(newList)
            setAllLists(parsedAllLists)
            localStorage.setItem('AllLists', JSON.stringify(parsedAllLists))
            setlistCount(listCount+1)
        }
    }

    const addNewCard = (data,listNumber ) => {
        const rawLists = localStorage.getItem('AllLists');
        const parsedLists = JSON.parse(rawLists);
        let name = data.name
        let description = data.description
        let id= data.id
        const newCard = {
            name,
            description,
            listNumber,
            id
        }
        console.log(parsedLists)
        console.log(listNumber)
        parsedLists[listNumber].cards.push(newCard)

        setAllLists(parsedLists);
        localStorage.setItem('AllLists', JSON.stringify(parsedLists))
    }
    var divs = AllLists.map((list, index) => (   
        <li key={index}>
            <IndividualList {...list} 
                onDragStart={(e) => onDragStart(e, `${list.listCount}`)}
                onDragOver={(e) => onDragOver(e)} 
                onDrop={(e) => { onDrop(e, `${list.listCount}`) }}
                onAdd={(data, listNumber) => addNewCard(data, listNumber)}
            />
        </li>
    ))
    console.log(divs)
    return (
        <>
            
            <Header increaseCounter={increaseCounter} />
            <NamePopup isOpen={namePopup} isClose={isClose} setListName={ setListName}/>
            <div className="Lists">
                {divs}
            </div>
            

        </>
    )
}

export default IndexPage;