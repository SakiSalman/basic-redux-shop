import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import notify from '../../Utility/toaster';
import AddSidebar from './AddSidebar';

const CreateProduct = () => {


    // manage input state 
    const [input, setInput] = useState({
        name : '',
        regular_price : '',
        sale_price : '',
        stock : '',
        photo : [],
        file : '',
        category : [],
        tags : []
    })
    // handle input state update
    const handleinputfields = (e) => {

        setInput( (prevState) => ({
                ...prevState,
                [e.target.name] : e.target.value
        }))
    }
    
    // handle checkbox state update
    const handleCheckboxupdate = (e) => {

        if (e.target.checked) {
            let data = input.category
            data.push(e.target.value)
            setInput( (prevState) => ({
                    ...prevState,
                    category : data
            }))
        }else{
            let data = input.category

          const newData  = data.filter(data => data !== e.target.value)

          setInput( (prevState) => ({
            ...prevState,
            category : newData
    }))

        }
    }

    // handle checkbox state update
    const handleTagsupdate = (e) => {

        if (e.target.checked) {
            let data = input.tags
            data.push(e.target.value)
            setInput( (prevState) => ({
                    ...prevState,
                    tags : data
            }))
        }else{
            let data = input.tags

          const newData  = data.filter(data => data !== e.target.value)

          setInput( (prevState) => ({
            ...prevState,
            tags : newData
    }))

        }
    }

    // Product photo update hadlller
    const handleProductPhoto = (e) => {
        setInput( (prev) => ( {
            ...prev, 
            file : e.target.files[0]
        }))
    }

    // Submit add product form
    const handleformsubmit = (e) => {

        e.preventDefault()

        let datas = new FormData()

        datas.append("name", input.name)
        datas.append('regular_price', input.regular_price);
        datas.append('sale_price', input.sale_price);
        datas.append('stock', input.stock);
        datas.append('category', input.category);
        datas.append('tags', input.tags);
        datas.append('photo', input.file)

        const formData = Object.fromEntries(datas)

        console.log(formData);

       try {
        axios.post('http://127.0.0.1:5050/api/v1/product', formData)
        .then( res => {
            
            notify('Product Added Successfully!')
            e.target.reset()
            setInput({
                name : '',
                regular_price : '',
                sale_price : '',
                stock : '',
                photo : [],
                file : '',
                category : [],
                tags : []
            })

        })
        .catch(
            err => {
                console.log(err);
                notify('Product added falis!')
            }
        )
       } catch (error) {
            console.log(error);
       }

    }

  return (
    <div className='container my-5'>
    <div className="row justify-content-center">
        <div className="col-md-3">
            <AddSidebar/>
        </div>
        <div className="col-md-6">
            <Link className='btn btn-primary' to="/admin/product">Back</Link>
            <br />
            <br />

            <div className="card product shadow-sm">
                <div className="card-body">
                <h2>Add new product</h2>
                <hr />

                <form onSubmit={handleformsubmit} method="POST">
                    <div className="my-3">
                        <label htmlFor="">Name</label>
                        <input className='form-control' name='name' type="text" onChange={handleinputfields} value={input.name}/>
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Regular Price</label>
                        <input name='regular_price' className='form-control' type="text" onChange={handleinputfields} value={input.regular_price} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Sale Price</label>
                        <input name='sale_price' className='form-control' type="text" onChange={handleinputfields} value={input.sale_price} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Stock</label>
                        <input  name='stock' className='form-control' type="number" onChange={handleinputfields} value={input.stock}/>
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Photo</label>
                        <input name='photo' className='form-control' type="file" onChange={handleProductPhoto}/>
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Category</label>
                        <br />
                        <label >
                            <input type="checkbox" value={'men'}  onChange={handleCheckboxupdate}/> Men
                        </label>
                        <br />
                        <label >
                            <input type="checkbox" value={'women'}  onChange={handleCheckboxupdate}/> Women
                        </label>
                        <br />
                        <label >
                            <input type="checkbox" value={'kids'} onChange={handleCheckboxupdate}/> Kids
                        </label>
                    </div>
                    
                    <hr />
                    <div className="my-3">
                        <label htmlFor="">Tags</label>
                        <br />
                        <label >
                            <input type="checkbox" value={'eid'} onChange={handleTagsupdate}/> Eid
                        </label>
                        <br />
                        <label >
                            <input type="checkbox" value={'puja'} onChange={handleTagsupdate}/> Puja
                        </label>
                        <br />
                        <label >
                            <input type="checkbox" value={'dengue'} onChange={handleTagsupdate}/> Dengue
                        </label>
                    </div>

                    <hr />

                    <div className="my-3">
                        <label htmlFor=""></label>
                        <input className='btn btn-primary w-100' type="submit"  value='Create'/>
                    </div>
                </form>

                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
    </div>
</div>
  )
};

export default CreateProduct;