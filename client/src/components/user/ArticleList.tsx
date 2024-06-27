import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getList, updtaeList } from '../../store/articleLists/articleList';
import {RootState} from "../../store/store"
import './articleList.css'

export default function ArticleList() {
    const list: any = useSelector((state: RootState) => state.articleList.list);
    const disPatch = useDispatch();

    useEffect(() => {
        disPatch(getList())
    }, [])
    console.log(1111,list);
    
    const handleUpdate=(item:any)=>{
        console.log(item);
        let newValue={...item, status:"Ngừng xuất bản"}
        disPatch(updtaeList(newValue))
    }

    return (
        <div>ArticleList
            <div className='list'>
                <div>Danh sách bài viết</div>
                <div>Thêm mới bài viết</div>
            </div>
            <br />
            <div >
                <div  className='btnsearch'>
                    <button>sắp xếp tên</button>
                    <input type="text" placeholder='Tìm kiếm bài viết theo tên' />
                    <button><span className="material-symbols-outlined">autorenew</span></button>
                </div>
                <br />
                <table className='table' border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Thể loại</th>
                            <th>Ngày viết</th>
                            <th>trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {list.map((item:any,index:any)=>{
                                return <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} alt="" /></td>
                                    <td>{item.category}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button onClick={()=>handleUpdate(item.id)}><span className="material-symbols-outlined">encrypted</span></button>
                                        <button><span className="material-symbols-outlined">visibility</span></button>
                                    </td>
                                </tr>
                            })}                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
