import user from '../components/data/user.json';
import { Profile } from './Profile/Profile';

import data from '../components/data/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../components/data/friends.json'
import { FriendList } from './FriendList/FriendList';


const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={rootStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
