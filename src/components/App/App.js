import React from 'react';

import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import './App.module.css';
import '../../fonts/fonts.css';

export default function App() {
  return (
    <>
      <section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <Statistics title="UPLOAD STATS" stats={statisticalData} />
      </section>
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transactions} />
      </section>
    </>
  );
}
