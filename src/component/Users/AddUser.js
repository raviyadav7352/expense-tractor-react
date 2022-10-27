import React, {useState, Fragment} from "react";
import style from "./AddUser.module.css"
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import Modal from "./Modal";
//import Wrapper from "../Ui/Wrapper";



const AddUser = ( props ) =>{
    const [userName, setUserName] =useState('')
    const [userAge, setUserAge] =useState('')
    const [error, setError] = useState()

    const userNameHandler =(e) =>{
        setUserName(e.target.value)
    }
    const userAgeHandler =(e) =>{
        setUserAge(e.target.value)
    }
    const userAddHandler =(e) =>{
        e.preventDefault()
        if(userName.length === 0 || userAge.length === 0){
            setError({
                title:"input is not fulfilled",
                message:"enter your details with name and age"
            })
            return;
        } if(userAge <= 0 ){
            setError({
                title:"invalid age",
                message:"enter correct age (age>0)"
            })
            return;
        }
        props.onAdduser(userName, userAge)
        setUserName("")
        setUserAge("")
    }
    const errorHandler = () => {
        setError(null)

    }
    
    return(
        // <Wrapper>
        // <React.Fragment> 
            <Fragment>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}></Modal>}
            <Card className={style.userform}>
                <form  onSubmit={userAddHandler}>
                    <label htmlFor="username">username</label>
                    <input id="username" value={userName} onChange={userNameHandler} type="text"/>
                    <label htmlFor="userage">userAge</label>
                    <input id="userage" value={userAge} onChange={userAgeHandler} type="number"/>
                    <Button type="submit">Add user</Button>
                </form>
            </Card> 
        </Fragment>         
        // </React.Fragment>
        // </Wrapper> 
    )
}
export default AddUser