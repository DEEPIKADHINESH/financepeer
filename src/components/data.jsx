import React,{Component} from "react";
import data from "../data.json";
class Data extends Component{
    render(){
        return(
        <div>
        <div className="table ">
                    <thead>
                        <tr>
                        <th>Userid</th> 
                        <th>id</th>
                        <th>Title</th>
                        <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.data.map(datas=>
                        <>
                        <tr key={datas.id}>
                            <td>{datas.userId}</td>
                            <td>{datas.id}</td>
                            <td>{datas.title}</td>
                            <td>{datas.body}</td>
                        </tr>
                            </>)}
                    </tbody></div>
            </div>
        )
    }
}
export default Data;