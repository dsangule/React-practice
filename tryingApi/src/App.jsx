import { useEffect } from "react";
import { useState } from "react";

export default function App(){

  const url = "https://aranyaani.us/gangaproject/search_product.php";
  const [data, setData] = useState([]);

  const url1 = "https://jsonplaceholder.typicode.com/users";
  const [data1, setData1] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.Search_List))
  }

  const fetchInfo1 = () => {
    return fetch(url1)
      .then((res) => res.json())
      .then((d) => setData1(d))
  }

  useEffect(() => {
    fetchInfo();
    fetchInfo1();
  }, []);

  return(
    <div>
      <h1>Heading</h1>
      {data1.map((dataObj) => {
        return(
          <h3>{dataObj.name}</h3>
        )
      })}
      {data.map((dataObj) => {
        return (
          <img 
            src={dataObj.image1url} 
            style = {{
              // width: "60vw",
              height: "40vh"
            }}
          />
        );
      })}
    </div>
  )
}