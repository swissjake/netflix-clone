import { useSelector } from 'react-redux'
import Nav from '../../components/Nav/Nav'
import { auth } from '../../firebase';
import { selectUser } from '../../features/userSlice';
import './profile.css'
import { signOut } from 'firebase/auth';

const Profile = () => {
    const user = useSelector(selectUser);

    // const date = new Date()
    // const day = date.getDay();
    // const month = date.getMonth();
    // const year = date.getFullYear();

    // const fullDate = day + '/' +  month + '/' + year;
    const plans = [
        {
            planName: "Netflix Standard",
            price : '1080p',
            subscribe: true
        },
        {
            planName: "Netflix Basic",
            price : "480p",
            subscribe: true
        },
        {
            planName: "Netflix Premium",
            price : '4K+HDR',
            subscribe: false
        },
    ]

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

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
                            <h3>Plans (Current Plans: Premium)</h3>
                            <p className='profile__renewal'>Renewal date: {today}</p>
                            <div className='plan__container'>
                                {plans.map((plan) => (
                                        <div className='plan__content'>
                                        <div className='plan__title'>
                                            <h3>{plan.planName}</h3>
                                            <p>{plan.price}</p>
                                        </div>
                                        <div>
                                            <button className="plan__subscribe--button" style={{backgroundColor: `${plan.subscribe ? "#e50919" : "gray"}`}}>{plan.subscribe ? 'Subscribe' : "Current Package"}</button>
                                        </div>
                                </div>
                                ))}
                                
                                {/* <div></div>
                                <div></div> */}
                            </div>
                    </div>

                    <button onClick={() => signOut(auth)} className='profile__signout'>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile