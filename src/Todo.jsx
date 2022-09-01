import React, {useState } from 'react';
import Img from "./image/Todo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import InputForTodo from './InputForTodo';
import Showitem from './Showitem';
const Todo = () => {
  const [alldata, setalldata] = useState([]);
  const [data, setdata] = useState("");
  const [toggle, settoggle] = useState(true);
  const [id, setid] = useState("");


  const Change = (e) => {
    setdata(e.target.value);
  }
  const Submit = (data) => {
    if (data === "") {
      alert("Enter data");
    }
    else if (data && !toggle) {
      setalldata(alldata.map((val) => {
        if (id === val.id)
          return { id: id, data: data };
        return val;
      }
      ))
      setdata("");
      settoggle(true);
      setid("");
    }
    else {
      const contain = alldata.find((val) => {
        return data === val.data;
      })
      if (contain === undefined) {
        const allinputdata = { id: new Date().getTime().toString(), data: data };
        setalldata([...alldata, allinputdata]);
        setdata("");
      }
      else
        alert("Element Already Exist")
      
    }
  }
  const Remove = (id) => {
    setalldata(() => {
      return alldata.filter((val) => {
        return id !== val.id;
      })
    })

  }
  const Edit = (id) => {
    let newedititem = alldata.find((val) => {
      return id === val.id;
    })
    setdata(newedititem.data);
    setid(id);
    settoggle(false);
  }
  return (
    <>
      <div className="container-fluid  mt-5">
        <div className="row justify-content-center">
          <div className=" col-9 col-sm-8  col-md-6 col-lg-4 text-center">
            <img src={Img} alt="" height="50px" width="50px" className='my-5' />
            <InputForTodo name={Submit} Change={Change} data={data} />
            {alldata.map((val,index) => {
              return <><Showitem key={index} id={val.id} edit={Edit} data={val.data} remove={Remove} /><br /></>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
