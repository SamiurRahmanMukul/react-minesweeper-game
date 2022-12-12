import { SearchOutlined } from '@ant-design/icons';
import {
  Button, Input, List, Tag
} from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../layout/MainLayout';
import { resetSit } from '../redux/slice/busSiteSlice';

function LeaderBoard() {
  const sits = useSelector((state) => state.busSit.sits);
  const [filterSit, setFilterSit] = useState(sits);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const { value } = e.target;
    setFilterSit(sits.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()) || item.sitNum.toLowerCase().includes(value.toLowerCase()) || item.booking.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <MainLayout>
      <div className='w-[450px] mx-auto mt-1 flex flex-row items-center justify-center space-x-1'>
        <Input
          size='large'
          placeholder='Type here to search by name'
          prefix={<SearchOutlined />}
          onChange={handleFilter}
          allowClear
        />
        <Button
          size='large'
          type='default'
          onClick={() => {
            dispatch(resetSit());
            window.location.reload();
          }}
        >
          Reset Board
        </Button>
      </div>

      <List
        className='w-[450px] mx-auto my-1'
        header={<h1 className='text-center text-xl font-bold uppercase'>Leader Board</h1>}
        bordered
        dataSource={filterSit}
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
