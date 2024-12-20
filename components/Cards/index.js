import { Card, Row } from "antd";
import Button from "../Button";

function Cards() {
  return (
    <div>
      <Row className="my-row">
        <Card bordered={true} className="my-card">
          <h2>Current Balance</h2>
          <p>UGX0</p>
          <Button text="Reset Balance" blue={true}/>
        </Card>

        <Card bordered={true} className="my-card">
          <h2>Total Income</h2>
          <p>UGX0</p>
          <Button text="Add Income" blue={true}/>
        </Card>

        <Card bordered={true} className="my-card">
          <h2>Total Expenses</h2>
          <p>UGX0</p>
          <Button text="Add Expense" blue={true}/>
        </Card>
      </Row>
    </div>
  );
}

export default Cards;
