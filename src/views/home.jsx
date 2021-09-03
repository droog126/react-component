import React, { Fragment } from 'react'
import { Route,Link ,NavLink} from 'react-router-dom'
import components from './components'
export default function home() {
    return (
        <Fragment>
            
            <div className=' text-center'>Hello,World</div>
            
            
            <div className='flex justify-start text-gray-400'>
                <NavLink to={'/components'} className='mx-2' activeClassName='text-red-600'>组件库</NavLink>
                <NavLink to={'/store'} className='mx-2' activeClassName='text-red-600'>store</NavLink>
            </div>
        </Fragment>
    )
}
