import { ITodo } from "../types/types";

function TodoItem({todo}: {todo: ITodo}) {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem;