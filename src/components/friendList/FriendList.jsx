import FriendListItem from './FriendListItem';
       
function FriendList({ friends }) {
    { /*props yerine destructuring kullandık keyi index değil id olarak aldık bu nedenle */}
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
           
    );
}
export default FriendList;