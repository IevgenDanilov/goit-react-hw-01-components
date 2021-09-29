import React from "react";
import "./App.scss";
import user from "./components/social-profile/user.json";
import { Stats } from "./components/social-profile/SocialProfile.jsx";
import { Profile } from "./components/social-profile/SocialProfile.jsx";
import statisticalData from "./components/statistics/statistical-data.json";
import Statistics from "./components/statistics/Statistics.jsx";
import friends from "./components/friendList/friends.json";
import FriendList from "./components/friendList/FriendList.jsx";
import TransactionHistory from "./components/transactionHistory/Transactions.jsx";
import transactions from "./components/transactionHistory/transactions.json";

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
    >
      <Stats stats={user.stats} />
    </Profile>
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
