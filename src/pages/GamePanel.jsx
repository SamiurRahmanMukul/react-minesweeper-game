import React from 'react';
import { useParams } from 'react-router-dom';
import Game from '../components/Game';
import MainLayout from '../layout/MainLayout';

function GamePanel() {
  const { level } = useParams();

  return (
    <MainLayout>
      <h1 className='text-center text-2xl font-bold my-5 uppercase'>
        {`Let's play - ${level}`}
      </h1>

      <div className='w-fit mx-auto mb-8'>
        <Game level={level} />
      </div>
    </MainLayout>
  );
}

export default GamePanel;
