import React,{useEffect, useState} from 'react'
export default function ButtonGroup(props) {
  
    const { getSelect, select, selectGroup } = props;

    return (
        <>
            <ul className='flex text-gray-400'>
                {selectGroup.map((val, index) => {
                    // console.log('有优化？')
                    return <li key={index} className={` ${select == index ? "text-red-600" : "hover:text-black"}  cursor-pointer mx-2`} onClick={
                        () => {
                            getSelect(index)
                        }
                    }>{ val }</li>
                })}
            </ul>
        </>
    )
}
