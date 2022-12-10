import { Button, List, Tag } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../layout/MainLayout';
import { updateSit } from '../redux/slice/busSiteSlice';

function LeaderBoard() {
  const sits = useSelector((state) => state.busSit.sits);
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <Button onClick={() => dispatch(updateSit({ index: 4, name: 'Mukul' }))}>Updated</Button>

      <List
        className='w-[400px] mx-auto my-1'
        header={<h1 className='text-center text-xl font-bold uppercase'>Leader Board</h1>}
        bordered
        dataSource={sits}
        renderItem={(item) => (
          <List.Item key={item.index}>
            <Tag className='w-[100px] text-center' color={item.color}>{item.index}</Tag>
            <Tag className='w-[100px] text-center' color={item.color}>{item.name || 'Unnamed'}</Tag>
            <Tag className='w-[100px] text-center' color={item.color}>{item.sitNum}</Tag>
            <Tag className='w-[100px] text-center' color={item.color}>{item.booking}</Tag>
          </List.Item>
        )}
      />
    </MainLayout>
  );
}

export default LeaderBoard;
