import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Login from './Login';
import MainNavBar from './MainNavBar'
import MarriageAlbum from './MarriageAlbum';
import BirthdayAlbum from './BirthdayAlbum';
import Signup from './Signup';
import AdminLogin from '../admin/AdminLogin'
import ClientNavBar from '../client/ClientNavBar'
import AdminNavBar from '../admin/AdminNavBar';
import ViewClients from '../admin/ViewClients';
import EventManagerSignup from '../eventmanager/EventManagerSignup';
import EventManagerLogin from '../eventmanager/EventManagerLogin'
import EventManagerNavBar from '../eventmanager/EventManagerNavBar'
import ViewEventManagers from '../admin/ViewEventManagers'
 import AddEvents from '../eventmanager/AddEvents'
import RacingEvents from './RacingEvents';
import ClientProfile from '../client/ClientProfile';
import EventManagerProfile from '../eventmanager/EventManagerProfile';
import ViewAddedEvents from '../eventmanager/ViewAddedEvents'
import BookEvent from '../client/BookEvent'

export default function MainRouting() 
{  
    

  return (
    <div>  
<Routes>
<Route path='/' element={<MainNavBar/>} />
<Route path='/home'  element={<MainNavBar/>} />
<Route path='/services' element={<MainNavBar/>} />
<Route path='/portfolio' element={<MainNavBar/>} />
<Route path='/contact' element={<MainNavBar/>} />
<Route path='/login' element={<Login />} />
 <Route path='/signup' element={<Signup/>} />
 <Route path="/portfolio/marriagealbum" element={<MarriageAlbum/>}/>
 <Route path="/portfolio/racingevents" element={<RacingEvents/>}/>
 <Route path="/portfolio/birthdayalbum" element={<BirthdayAlbum/>}/>
 <Route path='/adminlogin' element={<AdminLogin/>}/>
 <Route path='/clientnav/:email' element={<ClientNavBar />} />
 <Route path='/adminnav' element={<AdminNavBar/>}/>
 <Route path='/viewclient' element={<ViewClients/>}/>
 <Route path='/emsignup' element={<EventManagerSignup/>}/>
 <Route path='/emlogin' element={<EventManagerLogin/>}/>
 <Route path='/emnav' element={<EventManagerNavBar/>}/>
 <Route path='/viewmanager' element={<ViewEventManagers/>}/>
 <Route path='/clientprofile/:email' element={<ClientProfile/>}/>
 <Route path='/addevents' element={<AddEvents/>}/>
 <Route path='/emnav/:email' element={<EventManagerNavBar/>}/>
 <Route path='/emprofile/:email' element={<EventManagerProfile/>}/>
 <Route path='/addevents' element={<AddEvents/>}/>
 <Route path='/viewevents' element={<ViewAddedEvents/>}/>
 <Route path='/bookevent' element={<BookEvent/>}></Route>
       
</Routes>
    </div>
  )
}



