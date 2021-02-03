import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'


const initialFormData = {
    id: '',
    title: '',
    category_name: '',
    source_name: '',
    ingredients: '',
    instructions: '',
    username: '',

}

const EditRecipe = ({categories, history}) => {
    const [formData, setFormData] = useState(initialFormData)

    const {recipeId} = useParams()
    const userId = localStorage.getItem('currentUserId')

    useEffect(()=> {
        axiosWithAuth().get(`users/${userId}/recipes/${recipeId}`)
            .then(res=> {
                console.log(res)
                setFormData(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
    }, [])


    const handleChanges = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        const updatedRecipe = {
            title: formData.title,
            category: formData.category_name,
            source: formData.source_name,
            ingredients: formData.ingredients,
            instructions: formData.instructions
        }
        axiosWithAuth().put(`users/${userId}/recipes/${recipeId}`, updatedRecipe)
            .then(res=> {
                console.log(res)
                setFormData(initialFormData)
                history.push(`/${userId}/recipes`)
            })
            .catch(err=> {
                console.log(err)
            })
    }

    const formCategories = categories.filter((item)=> {
        return (item !== formData.category_name)
    })

    return (
        <form className='addForm' onSubmit={onSubmit}>
            <h2>Edit Recipe</h2>
            <label className='formItem' key='1'>
                Title
                <input
                    required type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChanges}
                />
            </label>
            <label className='formItem' key='2'>
                Source
                <input
                    required type='text'
                    name='source_name'
                    value={formData.source_name}
                    onChange={handleChanges}
                />
            </label>
            <label className='formItem' key='3'>
                Ingredients
                <textarea
                    required name='ingredients'
                    value={formData.ingredients}
                    onChange={handleChanges}
                />
            </label>
            <label className='formItem' key='4'>
                Instructions
                <textarea
                required name='instructions'
                value={formData.instructions}
                onChange={handleChanges}
                />
            </label>
            <label className='formItem' key='5'>
                Category
                <select
                    required name='category_name'
                    onChange={handleChanges}
                    // value={formData.category_name}
                >
                    <option value={formData.category_name}>{formData.category_name}</option>
                    {/* <option value=''>--select one--</option> */}
                    {formCategories.map(item => 
                        <option value={item}>{item}</option>
                    )}
            </select>
            </label>
            <div className='formItem' key='6'>
                <button>Submit Changes</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(EditRecipe)