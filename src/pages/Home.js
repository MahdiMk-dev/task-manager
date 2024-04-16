// pages/Home.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../actions/taskActions';

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const loading = useSelector(state => state.tasks.loading);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <div>
      <h2>Task Manager</h2>
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
