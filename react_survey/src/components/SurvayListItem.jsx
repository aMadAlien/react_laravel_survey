import React from 'react'
import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from './core/TButton'

export default function SurvayListItem({ survay, onDeleteClick }) {
  return (
    <div className='flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray h-[470px]'>
      <img
        src={survay.image_url}
        alt={survay.title}
        className="w-full h48 object-cover" />

      <h4 className='mt-4 text-lg font-bold'>{survay.title}</h4>

      <div
        dangerouslySetInnerHTML={{__html: survay.description}}
        className="overflow-hidden flex-1"
      ></div>

      <div className='flex justify-between items-center mt-3'>
        <TButton to={`survay/${survay.id}`}>
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </TButton>
        <div className='flex  items-center'>
          <TButton href={`/view/survay/${survay.slug}`} circle link>
            <ArrowTopRightOnSquareIcon className='w-5 h-5' />
          </TButton>

          {survay.id && (
            <TButton onClick={onDeleteClick} circle link color="red">
              <TrashIcon className='w-5 h-5' />
            </TButton>
          )}
        </div>
      </div>
    </div>
  )
}
