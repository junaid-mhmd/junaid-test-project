import React,{useEffect,useState} from "react";
import axios from "axios";
import { BaseUrl } from "../utils/Base";
import '../../styles/Home.css'

function Home() {
  const [healthTips,setHealthTips] = useState([])

  useEffect(()=> {
    const token = localStorage.getItem("login_data")

    if(token){
      getHealthTips(token)
    }else{
      window.location.href = "/login"
    }
  },[])

  const getHealthTips = (token)=> {

  var config = {
       method: "GET",
       url: BaseUrl +  '/admin/get_healthTip_categories',
        headers: {
          Authorization: "Bearer " + token,
        },
     };
     axios(config).then((res) => {
        setHealthTips(res.data.data.health_category)

     });
  }
  return (
    <div className="home">
      <div className="container">
        <div className="body">
          <div className="healthTips">
            <div className="title">
              <h5>Health Tips</h5>
            </div>
            <table>
              <th>
                <td></td>
                <td>Title</td>

              </th>
              {healthTips && healthTips.map((i,index)=> (

              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.title}</td>
              </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
