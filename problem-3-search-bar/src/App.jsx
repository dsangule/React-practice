import { Input } from "antd";

export default function App(){

  function searchApi(){
    document.getElementById("search").value
  }

  function searchVal(){
    const date = new Date();

    setTimeout(searchApi, 500);
  }

  return(
    <div>
      <Input type="text" id="search" onChange={searchVal}/>
    </div>
  )
}