import styles from './FriendList.module.css';

function FriendListItem(props) {
    return (
        <div className={styles.friendListItem}>

            <img src={props.avatar} alt="Avatar" width="48" />
            <p>{props.name}</p>
            <p className={props.isOnline ? `${styles.status} ${styles.online}` : `${styles.status} ${styles.offline}`}>
                {props.isOnline ? "Online" : "Offline"}
            </p>
           
        </div>
    );
}
export default FriendListItem;