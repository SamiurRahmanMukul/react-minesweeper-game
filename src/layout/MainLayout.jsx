import {
  FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined
} from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function MainLayout({ children }) {
  return (
    <Layout>
      {/* header section */}
      <Header className='flex flex-row items-center justify-between !bg-stone-600'>
        <Link to='/'>
          <Title className='!text-white mt-2' level={2}>Minesweeper</Title>
        </Link>

        <Link to='/leader-board'>
          <Button className='!text-white hover:!text-blue-400' type='default'>
            Leader Board
          </Button>
        </Link>
      </Header>

      {/* main content section */}
      <Content className='!min-h-[81.8vh]'>
        {children}
      </Content>

      {/* footer section */}
      <Footer className='flex flex-col items-center justify-between !bg-stone-600 md:flex-row'>
        <Text className='text-white text-sm'>
          &copy; 2022
          {' '}
          <Button
            className='mx-0 px-0'
            href='http://www.samiurrahmanmukul.epizy.com'
            target='_blank'
            type='link'
          >
            Samiur Rahman Mukul.
          </Button>
          {' '}
          All rights reserved.
        </Text>

        <div className='space-x-4'>
          <Button
            className='text-black'
            icon={<FacebookOutlined />}
            href='https://www.facebook.com/SamiurRahmanMukul'
            target='_blank'
            shape='circle'
            type='dashed'
            size='middle'
          />
          <Button
            className='text-black'
            icon={<InstagramOutlined />}
            href='https://www.instagram.com/samiur_rahman_mukul'
            target='_blank'
            shape='circle'
            type='dashed'
            size='middle'
          />
          <Button
            className='text-black'
            icon={<TwitterOutlined />}
            href='https://www.twitter.com/SamiurRahMukul'
            target='_blank'
            shape='circle'
            type='dashed'
            size='middle'
          />
          <Button
            className='text-black'
            icon={<LinkedinOutlined />}
            href='https://www.linkedin.com/in/SamiurRahmanMukul'
            target='_blank'
            shape='circle'
            type='dashed'
            size='middle'
          />
          <Button
            className='text-black'
            icon={<GithubOutlined />}
            href='https://www.github.com/SamiurRahmanMukul'
            target='_blank'
            shape='circle'
            type='dashed'
            size='middle'
          />
        </div>
      </Footer>
    </Layout>
  );
}

export default MainLayout;
