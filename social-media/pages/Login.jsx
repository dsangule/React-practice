import { Input, Button } from "antd"
import { UserOutlined } from "@ant-design/icons"
import "./Login.css"

export default function Login(){

  const url = "https://todo-f7f23-default-rtdb.asia-southeast1.firebasedatabase.app/";

  return(
    <div>
      <center>
        <h1>Login Page</h1>
          <div className="login--form">
            <Input placeholder="large size" prefix={<UserOutlined />} />
            <Input.Password placeholder="input password" />
            <Button>Login</Button>
          </div>
      </center>
    </div>
  )
}