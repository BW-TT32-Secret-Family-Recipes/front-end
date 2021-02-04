import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom'
import { categories } from '../data/constants'


const initialFormData = {
    id: '',
    title: '',
    category_name: '',
    source_name: '',
    ingredients: '',
    instructions: '',
    username: '',

}

const EditRecipe = ({ history }) => {
    const [formData, setFormData] = useState(initialFormData)

    const {recipeId} = useParams()
    const userId = localStorage.getItem('currentUserId')

    useEffect(()=> {
        axiosWithAuth().get(`users/${userId}/recipes/${recipeId}`)
            .then(res=> {
                // console.log(res)
                setFormData(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
    }, [recipeId, userId])


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
                // console.log(res)
                setFormData(initialFormData)
                history.push(`/${userId}/recipes`)
            })
            .catch(err=> {
                console.log(err)
            })
    }


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
                    maxLength='128'
                    value={formData.ingredients}
                    onChange={handleChanges}
                />
            </label>
            <label className='formItem' key='4'>
                Instructions
                <textarea
                required name='instructions'
                maxLength='1000'
                value={formData.instructions}
                onChange={handleChanges}
                />
            </label>
            <label className='formItem' key='5'>
                Category
                <input 
                    required
                    name='category_name'
<<<<<<< HEAD:src/components/EditRecipe.js
                    list='categoryList'
                    onChange={handleChanges}
                    value={formData.category_name}
                />
                <datalist id='categoryList'>
                    {categories.map(category => <option value={category} />)}
=======
                    list='categorylist'
                    onChange={handleChanges}
                    value={formData.category_name}
                />
                <datalist id='categorylist'>
                    {categories.map(category => <option value={category}/>)}
>>>>>>> cc8b6bfe1659d11193855b17ce5c4308e4e53a8d:front-end/src/components/EditRecipe.js
                </datalist>
            </label>
            <div className='formItem' key='6'>
                <button>Submit Changes</button>
            </div>
        </form>
    )
}

export default EditRecipe