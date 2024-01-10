import React from 'react';
import { Routes as Switch, Route as Routing, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from '../Components/Home/Home';
import Shop from '../Components/Shop/Shop';
/*
import Login from '../Components/login/login';
import Signup from '../Components/Signup/Signup';
import Profile from '../Components/profile/profile';
import CreatePost from '../Components/CreatePost/CreatePost';
import EditProfile from '../Components/EditProfile/EditProfile';
import Search from '../Components/Search/Search';
import PrivateRoute from '../PrivateRoute';
import DisableIfAuth from '../DisableIfAuth';
import LostTrack from '../Components/LostTrack';
import UploadImage from '../Components/Uploadimage/UploadImage';
import UserPosts from '../Components/UserPosts/UserPosts';
import Follow from '../Components/Follow/Follow';
import PublicProfile from '../Components/PublicProfile/PublicProfile';
import Edit from '../Components/Edit/Edit';
import PostElement from '../Components/PostElement/PostElement';

*/

const Routesr = () => {
	const [alert, setAlert] = useState(null);

	return (
		<>
			<Switch>
				
					<Routing exact path="/" element={<Home />} />
					<Routing exact path="/shop" element={<Shop />} />
					{/*
					<Routing exact path="/paymentcancled" element={<Home />} />
					<Routing exact path="/paymentaccepted" element={<Home />} />
	*/}
			</Switch>
		</>
	);
};
export default Routesr;