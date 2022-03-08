import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Number(props) {
  
  const [num, setNum] = useState(Math.floor(Math.random() * 10));
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (!click) {
      setNum(Math.floor(Math.random() * 10));
    }
  }, [props.count]);
  const seat = (e) => {
    if (!click) {
      props.stayed((prev) => prev - 1);
      e.target.classList.remove("btn-primary");
      setClick(true);
    }
    else{
      props.stayed((prev) => prev + 1);
      e.target.classList.add("btn-primary");
      setClick(false);
    }
    
  };
  return (
    <Button className="m-2" onClick={seat} variant="primary">
      {num}
    </Button>
  );
}
