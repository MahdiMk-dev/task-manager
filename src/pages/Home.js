import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../actions/taskActions';
import { getAllColumns } from '../actions/columnActions';
import '../styles/home.css'; // Import CSS file for styling

const Home = () => {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns.columns);
  const loadingColumns = useSelector(state => state.columns.loading);

  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(getAllColumns());
  }, [dispatch]);

  return (
    <div>
    <h2>Task Manager</h2>
    <div className="container">

      {loadingColumns ? (
        <p>Loading...</p>
      ) : (
        <div className="columns-container">
          {columns.map(column => (
            <div className="column" key={column._id}>
              <h3>{column.title}</h3>
              <ul>
                {column.tasks.map(task => (
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
    </div>
  );
};

export default Home;
