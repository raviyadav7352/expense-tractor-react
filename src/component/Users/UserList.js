import Card from "../Ui/Card";
import './UserList.css'
const UserList = (props) => {
    return(
        <Card className="users">
            <ul>
                {(props.users.length === 0) && <p>there is no user</p>}
                {props.users.map(user =>(
                <li key={user.id}>
                    {user.name},  
                    {user.age} years old</li>
                ))}
            </ul>
        </Card>
    )
}
export default UserList;