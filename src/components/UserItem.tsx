import { IUser } from "../types/types";

function UserItem({user}: {user: IUser}) {
    return (
        <div style={{border: "1px solid gray", padding: 15, textAlign: "left"}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem;