import React, { useEffect, useState } from 'react'
import SpinnerImg from "../../loader/Loader"
import { FeEdit, FaTrashAlt, FaEdit } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import "./productList.scss"
import Search from '../../search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PRODUCTS, selectFilteredProducts } from '../../../redux/features/product/filterSlice';
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteProduct, getProducts } from '../../../redux/features/product/productSlice';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = ({ products, isLoading }) => {
  const [search, setSearch] = useState("");
  const filteredProducts = useSelector(selectFilteredProducts)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).
        concat("...")
      return shortenedText
    }
    return text;
  }

const delProduct = async (id)=>{
  await dispatch(deleteProduct(id));
  await dispatch(getProducts());
}


const confirmDelete = (id) =>{
  
    confirmAlert({
      title: 'Delete submit!!',
      message: 'Are you sure to delete this product.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => delProduct(id)
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')

        }
      ]
    });

}


  //  Begin Pagination
  const items = filteredProducts;
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
// End pagination





  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }))
  }, [products, search, dispatch])

  return (
    <div className='product-list'>
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Inventory Items</h3>
          </span>
          <span>
            <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          </span>
        </div>

        {isLoading && <SpinnerImg />}

        <div className="table">
          {!isLoading && products.lenth === 0 ? (
            <p>-- No product found, please add a product...</p>
          ) : (
            <table>
              <thead>
                <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>Category </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Value</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentItems.map((product, index) => {
                    const { _id, name, category, price, quantity } = product;
                  
                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(name, 16)}</td>
                        <td>{category}</td>
                        <td>&#8377; {price}</td>
                        <td>{quantity}</td>
                        <td>&#8377; {price * quantity}</td>
                        <td className="icons">
                          <span>
                            <Link to={`/product-detail/${_id}`}>
                            <AiOutlineEye size={25} color={"purple"}/></Link>
                          </span>
                          <span>
                            <Link to={`/edit-product/${_id}`}>
                            <FaEdit size={25} color={"green"} /></Link>
                          </span>
                          <span>
                            <FaTrashAlt size={25} color={"red"} onClick = {()=>{
                                confirmDelete(_id);
                            }}/>
                          </span>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName = "page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  )
}

export default ProductList
