import React, { useState } from 'react';
import FilterControls from './FilterControls';
import QuestionTable from './QuestionTable';

const EditDatabase = () => {
    const [filter, setFilter] = useState({ year: '', topic: '' });
    const [data, setData] = useState([
        {
            id: 1,
            year: 2023,
            topics: ['ReactJS', 'JSX', 'JavaScript'],
            questions: ['What is virtual dom?', 'Why we use map in react?']
        },
        {
            id: 2,
            year: 2022,
            topics: ['Java', 'SpringBoot', 'Programming'],
            questions: ['What is array?', 'Why we use multi-threading in Java?']
        },
        // Add more data as required
    ]);

    // Filter logic
    const filteredData = data.filter(item => {
        return (
            (filter.year === '' || item.year === parseInt(filter.year)) &&
            (filter.topic === '' || item.topics.includes(filter.topic))
        );
    });

    // Handle updating the table (topics/questions)
    const handleUpdate = (id, updatedItem) => {
        const updatedData = data.map(item => (item.id === id ? updatedItem : item));
        setData(updatedData);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Edit Database</h1>
            <FilterControls filter={filter} setFilter={setFilter} data={data} />
            <QuestionTable data={filteredData} onUpdate={handleUpdate} />
        </div>
    );
};

export default EditDatabase;