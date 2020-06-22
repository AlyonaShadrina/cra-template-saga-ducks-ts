import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserList from '../components/UserList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

const UserListContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectors.usersList);
  
  useEffect(() => {
    console.log('useEffect');
    
    dispatch(actions.allUsersRequest());
  }, []);

  return (
    <div className="fontSize-smaller">
      UserListContainer
      <UserList users={users} />
    </div>
  );
}

export default UserListContainer;
