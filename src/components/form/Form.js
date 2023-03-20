import { useState } from "react";
import "./Form.css"
import {AiOutlineDelete} from 'react-icons/ai'
import {GrEdit} from 'react-icons/gr'

const Form = () => {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [priority, setPriority] = useState("");
    const [data, setData] = useState([])
    const [urgency, setUrgency] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: Math.random(),
            title,
            time,
            priority
        }
        createUrgency(todo);
        setData([...data, todo]);
    };

    const createUrgency = (todo) => {
        todo.priority === "Urgency" && setUrgency([...urgency, todo])
        console.log(urgency)
    }

    const handleDelete = (id) => {
        console.log(id)
        setData(data.filter(todo => (todo.id !== id)))
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label name="todo">What your To-do?</label>
                <input type="text" name="todo" onChange={(e) => setTitle(e.target.value)} required></input>
                <label name="time">How many time do you need?(hours)</label>
                <input type="text" name="time" onChange={(e) => setTime(e.target.value)} required></input>
                <label name="priority">What your priority in this to-do?</label>
                <select onChange={(e) => setPriority(e.target.value)} required>
                    <option></option>
                    <option>Urgency</option>
                    <option>for more Late</option>
                    <option>Only for not forget</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <h2>To-do's</h2>
            <div className="todo-list">
                {data.length === 0 && <p>Não há tarefas...</p>}
                {data.map((t) => (
                    <div key={t.id} className={t.priority}>
                        <p>Title: {t.title}</p>
                        <p>Time:{t.time}</p>
                        <p>Priority:{t.priority}</p>
                        <div className="icons">
                            <span className="delete" onClick={() => handleDelete(t.id)}><AiOutlineDelete/></span>
                            <span className="edit"><GrEdit/></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form