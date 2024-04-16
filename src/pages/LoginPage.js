import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../actions/taskActions';
import { getAllColumns } from '../actions/columnActions';

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const columns = useSelector(state => state.columns.columns);
  const loadingTasks = useSelector(state => state.tasks.loading);
  const loadingColumns = useSelector(state => state.columns.loading);

  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(getAllColumns());
  }, [dispatch]);

  // Organize tasks by columns
  const tasksByColumns = {};
  tasks.forEach(task => {
    const columnId = task.columnId;
    if (!tasksByColumns[columnId]) {
      tasksByColumns[columnId] = [];
    }
    tasksByColumns[columnId].push(task);
  });

  return (
    <div>
      <h2>Task Manager</h2>
      {loadingTasks || loadingColumns ? (
        <p>Loading...</p>
      ) : (
        <div>
          {columns.map(column => (
            <div key={column._id}>
              <h3>{column.title}</h3>
              <ul>
                {tasksByColumns[column._id] &&
                  tasksByColumns[column._id].map(task => (
                    <li key={task._id}>
                      <strong>{task.title}</strong>: {task.description}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
