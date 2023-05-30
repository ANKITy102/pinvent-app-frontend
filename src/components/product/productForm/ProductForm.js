import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductForm.scss'
import Card from '../../card/Cardf';
const ProductForm = ({
    product, productImage, imagePreview, description,
    setDescription, handleInputChange,
    handleImageChange, saveProduct,
}) => {
    return (
        <div className="add-product">
            <Card cardClass={"card"}>
                <form onSubmit={saveProduct}>
                    <Card cardClass={"group"}>
                        <label>Product Image</label>
                        <code className="--color-dark">Supported Formats: jpg, jpeg, png</code>
                        <input type="file" name="image" value={product?.imagePreview} accept="image/*" onChange={(e) => {
                            handleImageChange(e);
                        }} />
                        {imagePreview
                            ? (<div className="image-preview">
                                <img src={imagePreview} alt="product" style={{
                                    objectFit: "contain"
                                }}/>
                            </div>)
                            : (<p>No image set for this product.</p>)}
                    </Card>
                    <label>Product Name:</label>
                    <input type="text" placeholder="Product Name" onChange={handleInputChange} name="name" value={product?.name} />

                    <label>Product Category:</label>
                    <input type="text" placeholder="Product Category" onChange={handleInputChange} name="category" value={product?.category} />

                    <label>Product Price:</label>
                    <input type="number" placeholder="Product Price" onChange={handleInputChange} name="price" value={product?.price} />

                    <label>Product Quantity:</label>
                    <input type="number" placeholder="Product quantity" onChange={handleInputChange} name="quantity" value={product?.quantity} />

                    <label>Product Description: </label>
                     <ReactQuill theme="snow" value={description} onChange={setDescription} modules={ProductForm.modules} formats={ProductForm.formats}/>;


                     <div className="--my">
                        <button className="--btn --btn-primary" type="submit">Save Product</button>
                     </div>
                </form>
            </Card>
        </div>
    )
}

ProductForm.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  ProductForm.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
  ];

export default ProductForm
