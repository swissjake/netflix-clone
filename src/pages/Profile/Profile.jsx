import { useSelector } from 'react-redux'
import Nav from '../../components/Nav/Nav'
import { auth } from '../../firebase';
import { selectUser } from '../../features/userSlice';
import './profile.css'
import { signOut } from 'firebase/auth';

const Profile = () => {
    const user = useSelector(selectUser);
  return (
    <div className='profile'>
        <Nav />

        <div className="profile__body">
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="/" />
                <div className="profile__details">
                    <h2>{user.email}</h2>
                    <div className="profile__plans">

                    </div>

                    <button onClick={() => signOut(auth)} className='profile__signout'>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile