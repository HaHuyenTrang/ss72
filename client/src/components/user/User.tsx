import React, { useEffect } from 'react'
import { getAllUser,deleteUser, addUser, UpdateUser } from '../../store/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
export default function User() {
    // lấy data
    const data:any=useSelector(state=>state);
    
    const disPatch =useDispatch();
    useEffect(()=>{
        disPatch(getAllUser());
    },[])
    // console.log(data);
    // hàm xóa
    const handleDelete=(id:number)=>{
            let confirmDelete=window.confirm("bạn có muốn xóa không?");
            if(confirmDelete){
                disPatch(deleteUser(id))
            }
    }
    // hàm thêm
    const addNewUser=()=>{
        let newUser={
            name:"Chang Chang"
        }
        disPatch(addUser(newUser))
    }
    // hàm sửa
    const handelUpdate=(item:any)=>{
        let newUser={...item, name:"Cheng Cheng"  }
        disPatch(UpdateUser(newUser))
    }
  return (
    <div>User
        <button onClick={addNewUser}>thêm</button>
        <ul>
            {data.userReducer.users.map((item:any)=>{
                return <li key={item.id}>your name: {item.name} 
                        <button onClick={()=>handleDelete(item.id)}>xóa</button>
                        <button onClick={()=>handelUpdate(item)}>cập nhật</button>
                        </li>
            })}
        </ul>
    </div>
  )
}
