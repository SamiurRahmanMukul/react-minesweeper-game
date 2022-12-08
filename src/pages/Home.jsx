import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const { Meta } = Card;

function Home() {
  return (
    <MainLayout>
      <div className='py-10 flex flex-col items-center justify-center space-x-0 lg:flex-row lg:items-start lg:space-x-10'>
        <Link to='/start/beginner'>
          <Card
            hoverable
            style={{ width: 170, height: 280 }}
            cover={<img alt='example' src='https://minesweeper.online/img/homepage/beginner.png' />}
          >
            <Meta title='Beginner' />
          </Card>
        </Link>

        <Link to='/start/intermediate'>
          <Card
            hoverable
            className='my-5 lg:my-0'
            style={{ width: 220, height: 320 }}
            cover={<img alt='example' src='https://minesweeper.online/img/homepage/intermediate.png' />}
          >
            <Meta title='Intermediate' />
          </Card>
        </Link>

        <Link to='/start/expert'>
          <Card
            hoverable
            style={{ width: 440, height: 350 }}
            cover={<img alt='example' src='https://minesweeper.online/img/homepage/expert.png' />}
          >
            <Meta title='Expert' />
          </Card>
        </Link>
      </div>
    </MainLayout>
  );
}

export default Home;
