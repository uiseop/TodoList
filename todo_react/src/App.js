import styled from "styled-components";
import "./index.css";
import { useState, useMemo, useRef } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const newInput = useRef(null);

    const [totalCnt, totalRemain] = useMemo(() => {
        const totalCnt = todos.length;
        const totalRemain = todos.filter((todo) => todo.clear === false).length;
        return [totalCnt, totalRemain];
    }, [todos]);

    function onClickHandler(e) {
        e.preventDefault();
        const newTodos = [...todos];
        if (newInput.current.value) {
            const newTodo = {
                title: newInput.current.value,
                clear: false,
            };
            newTodos.push(newTodo);
            setTodos(newTodos);
            newInput.current.value = "";
        } else {
            alert("할일을 입력해주세요!!");
        }
    }

    function onCheckHandler(idx) {
        const newTodos = [...todos];
        newTodos[idx].clear = !newTodos[idx].clear;
        setTodos(newTodos);
        console.log(newTodos);
    }

    function deleteHandler(idx) {
        if(window.confirm(`${todos[idx].title}을(를) 삭제하시겠습니까?`)) {
            const newTodos = [...todos];
            newTodos.splice(idx,1);
            setTodos(newTodos);
            return
        }
        return
    }

    const lists = todos.map((todo, idx) => (
        <li className="list" key={idx}>
            <input
                id={`check${idx}`}
                type="checkbox"
                className="check"
                onClick={() => onCheckHandler(idx)}
            />
            <label htmlFor={`check${idx}`}></label>
            {todo.clear ? (
                <span className="text clear">{todo.title}</span>
            ) : (
                <span className="text">{todo.title}</span>
            )}
            <button type="button" className="btn" onClick={() => deleteHandler(idx)}>
                Delete
            </button>
        </li>
    ));

    return (
        <Container>
            <div className="app_header">
                <h2 className="count">{totalCnt} Tasks</h2>
                <span className="left">{totalRemain} Remain</span>
            </div>
            <div className="app_body">
                <ul className="lists">{lists}</ul>
            </div>
            <form onSubmit={onClickHandler}>
                <div className="app_form">
                    <input
                        ref={newInput}
                        type="text"
                        className="add_text"
                        placeholder="Add Todo.."
                    />
                    <button type="submit" className="add_btn">
                        Add
                    </button>
                </div>
            </form>
        </Container>
    );
}

const Container = styled.div`
  width: 555px;
  min-height: 643px;
  background: #fff;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);
  border-radius: 26px;
  padding 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
