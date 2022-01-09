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

    function onClickHandler() {
        const newTodos = [...todos];
        if (newInput.current.value) {
            const newTodo = {
              title: newInput.current.value,
              clear: false
            }
            newTodos.push(newTodo);
            setTodos(newTodos);
            newTodo.current.value = "";
        } else {
            alert("할일을 입력해주세요!!");
        }
    }

    return (
        <Container>
            <div className="app_header">
                <h2 className="count">{totalCnt} Tasks</h2>
                <span className="left">{totalRemain} Remain</span>
            </div>
            <div className="app_body">
                <ul className="lists">
                    <li className="list">
                        <input id="check1" type="checkbox" className="check" />
                        <label for="check1"></label>
                        <span className="text">Something Here</span>
                        <button type="button" className="btn">
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
            <div className="app_form">
                <input
                    ref={newInput}
                    type="text"
                    className="add_text"
                    placeholder="Add Todo.."
                />
                <button
                    type="button"
                    className="add_btn"
                    onClick={onClickHandler}
                >
                    Add
                </button>
            </div>
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
