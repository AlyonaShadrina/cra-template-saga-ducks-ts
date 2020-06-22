import React from 'react';
import { TUser } from '../types';

type Props = {
  users: TUser[];
}

const UserList = ({ users }: Props) => {
  return (
    <div className="fontSize-smaller">
      UserList
      {users.map(user => (
        <div className="fontSize-smaller">
          {`${user.first_name} ${user.last_name}`}
        </div>
      ))}
    </div>
  );
}

export default UserList;
