import { useState } from "react";
import "./Form.css"

const Form = () => {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [priority, setPriority] = useState("");
    const [data, setData] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: Math.random(),
            title,
            time,
            priority
        }
        setData([...data, {todo}]);
    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label name="todo">What your To-do?</label>
                <input type="text" name="todo" onChange={(e) => setTitle(e.target.value)}></input>
                <label name="time">How many time do you need?(hours)</label>
                <input type="text" name="time" onChange={(e) => setTime(e.target.value)}></input>
                <label name="priority">What your priority in this to-do?</label>
                <select onChange={(e) => setPriority(e.target.value)}>
                    <option>Urgency</option>
                    <option>for more Late</option>
                    <option>Only for not forget</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <div className="todo-list">
                <h2>To-do's</h2>
                {data.length === 0 && <p>Não há tarefas...</p>}
                {data.map((t) => (
                    <div>
                        <p key={t.id}>Title: {t.title}</p>
                        <p key={t.id+1}>Time:{t.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form