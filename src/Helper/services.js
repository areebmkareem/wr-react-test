import AdminCollection from '../Constants/adminCollection.json';

const errorMessage = {error: true, message: 'Username / Password is incorrect '};

const signInWithUsernameAndPassword = (payload) => {
  return new Promise((resolve, reject) => {
    const adminUsers = AdminCollection.results;
    const userDetail = adminUsers.find((user) => user.username === payload.username);
    if (userDetail) {
      const passwordMatched = userDetail.password === payload.password;
      if (passwordMatched) resolve({success: true, data: payload});
      else reject(errorMessage);
    } else reject(errorMessage);
  });
};

const services = {signInWithUsernameAndPassword};

export default services;
