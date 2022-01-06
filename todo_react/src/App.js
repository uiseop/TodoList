import styled from "styled-components";
import "./index.css"

function App() {
  return (
    <Container>
      <div className="app_header">
        <h2 className="count">1 Tasks</h2>
        <span className="left">1 Remain</span>
      </div>
      <div className="app_body">
        <ul className="lists">
          <li className="list">
            <input type="checkbox" className="check" />
            <span className="text">Something Here</span>
            <button type="button" className="btn">Delete</button>
          </li>
        </ul>
      </div>
      <div className="app_form">
        <input type="text" className="add_text" placeholder="Add Todo.." />
        <button className="add_btn">Add</button>
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
`

export default App;