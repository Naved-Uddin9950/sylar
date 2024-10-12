import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full flex items-center justify-center min-h-96'>
      <div className='h-max w-max self-center grid grid-cols-1 gap-4'>
        <button
          type='button'
          className='bg-primary hover:bg-secondary hover:scale-110 font-semibold px-2 py-1 rounded-md'
          onClick={() => navigate('/edit-database')}
        >
          Edit the Database
        </button>
        <button
          type='button'
          className='bg-primary hover:bg-secondary hover:scale-110 font-semibold px-2 py-1 rounded-md'
          onClick={() => navigate('/select-topics')}
        >
          Select topics
        </button>
      </div>
    </div>
  )
}

export default MainPage;