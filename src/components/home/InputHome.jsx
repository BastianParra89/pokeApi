import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'
import './InputHome.css'

const InputHome = () => {
    const {handleSubmit, reset, register} = useForm ()
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const   submit = data => {
        console.log(data)
        dispatch(setNameGlobal(data.nameUser))
        reset({
            nameUser:''
        })
        navigate('/pokedex')
    }

  return (
    <form className='form-name' onSubmit={handleSubmit(submit)}>
        <input className='input-form-name' type="text" placeholder='Your name here' {...register('nameUser')}/>
        <button className='button-form-name'>Go!</button>
    </form>
  )
}

export default InputHome