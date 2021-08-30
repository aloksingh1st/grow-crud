import React, {useState} from 'react'
import "./cards.css"
import "./forms.css"
import Hardcard from './hardcard'


const Cards = (props) => {

    // hooks defination


    const [inputData, setInputData] = useState("");
    const [inputQuant, setInputQuant] = useState("");
    const [inputPass, setInputPass] = useState("");
    const [items, setItems] = useState([]);
    const [edits, setEdits] = useState("");
    const [toggleButton, settoggleButton] = useState(false);

    
// function for adding items 


    const addItem = (e) =>{
        e.preventDefault();
        if(!inputData || !inputQuant || !inputPass){
            alert("Please Enter a Valid Data"); 
        }
        else if(inputData && toggleButton){
            setItems(
                items.map((currElement) => {
                    if (currElement.id === edits){
                        return{...currElement, name:inputData, quant:inputQuant, price:inputPass};
                    }
                    else{
                        return currElement;
                    }
                })
            )
            settoggleButton(false)
            setInputData("")
            setInputQuant("")
            setInputPass("")
        }
        else{

            const newObj = {
                id:new Date().getTime().toString(),
                name:inputData,
                quant:inputQuant,
                price:inputPass
            }
            setItems([...items,newObj]);
            setInputData("");
            setInputPass("");
            setInputQuant("");
        }
    }


// funtion for deletion of items

    const deleteTrigger= (index)=>{
        const updateItems = items.filter((currElement)=>{
            return currElement.id !== index;
        })
        setItems(updateItems)
    }

    // function for editing the value
    const editItems = (index) =>{
        const editableItems = items.find((currElement)=>{
            return currElement.id === index;
        })
        setInputData(editableItems.name);
        setInputQuant(editableItems.quant);
        setInputPass(editableItems.price)
        settoggleButton(true);
        setEdits(index);
    }


    // returning jsx for rendering starts here


    return (
        <>


{/* forms starts here */}


<div className="form-container">

        <input type="text" name="product_name" id="product_name" placeholder="Enter the product name" value={inputData} onChange={(e)=>setInputData(e.target.value)} autoComplete="off"/>

        
        <input type="text" name="product_quantity" id="product_quantity" placeholder="Enter the product quantity" value={inputQuant} onChange={(e)=>setInputQuant(e.target.value)} autoComplete="off"/>

        <input type="number" name="price" id="price" placeholder="Enter Price of the product" value={inputPass} onChange={(e)=>setInputPass(e.target.value)} autoComplete="off"/>
        {toggleButton ?  (<button className="add" onClick={addItem}>Update</button>) : (<button className="add" onClick={addItem}>Add</button>)}
       
        </div>


{/* dummy table indicator */}

        <Hardcard />


{/* fetching the data with loop

*/}
        {items.map((currElement) =>{
            return(
                <div className="main-conatainer" key={currElement.id}>

        <div className="cards-container">

        <div className="card">{currElement.name} </div>
        <div className="card">{currElement.quant}</div>
        <div className="card">{currElement.price}</div>
        <div className="card"><button className="dl-button" onClick={() => editItems(currElement.id)}><i class="far fa-edit"></i></button><button className="dl-button" onClick={()=>deleteTrigger(currElement.id)}><i class="fas fa-trash"></i></button></div>
        </div>
        </div>


            )
        })}
        

        
        </>
    )
}

export default Cards
