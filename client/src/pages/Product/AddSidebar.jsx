import React, { useEffect, useState } from 'react'
import { createSlug } from '../../Utility/createSlug'

const AddSidebar = () => {

useEffect(() => {
    console.log(catInput);
});
    // category input managment
    const [catInput, setCatInput] = useState({
        catName : '',
        catSlug : '',
        catPhoto : '',
        status : ''
    })
    // handle category input update
    const handleCategoryInput = (e) => {
        const slug = createSlug(catInput.catName)
        setCatInput( (prevState) => ( {

            ...prevState, 
            [e.target.name] : e.target.value,
            catSlug : slug

        }))
    }
    // handle category input update
    const handlecategorysubmit = (e) => {
        e.preventDefault()

    }

  return (
    <>
        <div className="row">
            <div className="col mb-4">
                <h2>Add Category</h2>
                <form action="" onSubmit={handlecategorysubmit}>

                    <div className="form-group mb-2">
                        <label htmlFor="">Category Name</label>
                        <input name='catName' type="text" className="form-control" onChange={handleCategoryInput} value={catInput.catName}/>
                    
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="">Photo</label>
                        <input name='photo' type="file" className="form-control" />
                    
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="">Status</label>
                       <select name="status" className='form-control' id="" onChange={handleCategoryInput}>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                       </select>
                    
                    </div>
                    <div className="form-group mb-2">
                        <input type="submit" className="btn btn-primary w-100" />
                    
                    </div>
                </form>
            </div>
            <br />
            <hr />
            <div className="col">
                <h2>Add Tags</h2>
                <form action="">

                    <div className="form-group mb-2">
                        <label htmlFor="">Tag Name</label>
                        <input type="text" className="form-control" />
                    
                    </div>
                    <div className="form-group mb-2">
                        <input type="submit" className="btn btn-primary w-100" />
                    
                    </div>
                </form>
            </div>
            <hr />
        </div>
    </>
  )
}

export default AddSidebar