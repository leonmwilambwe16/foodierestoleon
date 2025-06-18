import '../Admin/Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar (){
  return (
    <div className='Sidebar'>
      <ul className="sidebar-list">
      <li><Link to="/dashboard/add">Add Product</Link></li>
        <li><Link to="/dashboard/list">List Product</Link></li>
        <li><Link to="/dashboard/orders">Orders</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar