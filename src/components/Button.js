import React from 'react'

export const Button = ({children}) => {
  return (
    <button className="w-64 text-xl text-white rounded-lg py-2.5 px-5 mr-2 mb-2 font-medium bg-blue-600 hover:bg-blue-700 ">{children}</button>
  )
}
