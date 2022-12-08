import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

function GamePanel() {
  const { stage } = useParams();

  return (
    <MainLayout>
      <h1 className='text-center text-2xl font-bold mt-5 uppercase'>
        {`Let's play - ${stage}`}
      </h1>
    </MainLayout>
  );
}

export default GamePanel;
