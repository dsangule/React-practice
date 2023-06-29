import "./App.css"

function swap(e){
  const c1 = document.getElementById("coupon1");
  const c2 = document.getElementById("coupon2");
  if (c2.className === "bottom" && e.currentTarget.id === "coupon2"){
    c1.className = "bottom";
    c2.className = "top";
  }
  else if (c1.className === "bottom" && e.currentTarget.id === "coupon1"){  
    c1.className = "top";
    c2.className = "bottom";
  }
}

export default function App() {
  return(
    <>
      <div className="coupons">
        <div className="bottom" id="coupon1" onClick={swap}>
          <h1>Coupon 1</h1>
          <p>This is content of Coupon 1</p>
        </div>
        <div className="top" id="coupon2" onClick={swap}>
          <h1>Coupon 2</h1>
          <p>This is content of Coupon 2</p>
        </div>
      </div>
    </>
  )
}