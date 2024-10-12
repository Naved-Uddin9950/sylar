import React, { useEffect, useState } from 'react';
import data from './data';
import { useNavigate } from 'react-router-dom';

const SelectTopics = () => {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const subs = data.map(item => item.subject);
        let list = new Set(subs);
        list = Array.from(list);
        setSubjects(list);
    }, [data]);

    return (
        <div className='w-full h-full min-h-96 flex items-center justify-center'>
            <div className='grid grid-cols-1 gap-2'>
                {subjects.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/subject/${item.toLowerCase()}`)}
                        className='px-2 py-1 rounded-md bg-primary hover:bg-secondary hover:scale-110 duration-300 active:scale-100 cursor-pointer'
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectTopics;