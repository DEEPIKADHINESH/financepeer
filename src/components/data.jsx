import React,{Component} from "react";
import data from "../data.json";
class Data extends Component{
    render(){
        return(
            <div>
                <div classNmae="table ">
                    <thead>
                        <tr>
                        <th>userid</th> 
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
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