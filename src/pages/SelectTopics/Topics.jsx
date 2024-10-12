import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data';

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const filteredTopics = data.filter(topic => topic.subject.toLocaleLowerCase() === id.toLocaleLowerCase());
        const topicList = filteredTopics.map(item => item.topic);
        setTopics(topicList);
    }, [id]);

    return (
        <div className='w-full h-full min-h-96 flex items-center justify-center'>
            <div className='grid grid-cols-1'>
                <div className='relative'>
                    <input type="search" className='bg-transparent border rounded-md px-2 py-1' />
                    <i class="fa fa-search absolute right-1 bottom-2"></i>
                </div>
                <div className='w-full flex justify-center items-center flex-col mt-4'>
                    {topics.map((item, index) => (
                        <div
                            key={index}
                            className='w-full flex items-center gap-2'
                        >
                            <input type="checkbox" className='cursor-pointer' />
                            {item}
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <i class="fa fa-solid fa-arrow-left cursor-pointer"></i>
                    <button 
                        type="button" 
                        className='px-2 py-1 rounded-md cursor-pointer bg-primary hover:bg-secondary hover:scale-110 active:scale-100 duration-300 font-semibold'
                    >Reset</button>
                    <i class="fa fa-solid fa-arrow-right cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Topics;