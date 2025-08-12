import React from "react";
import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/friendList/FriendList";  
import friends from "./friends.json"; // Assuming you have a friends.json file
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./components/transactions.json"; // Assuming you have a transactions.json file
function App () {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        alt="User avatar"
        stats={userData.stats}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
     
    </>
  );
};

export default App;


