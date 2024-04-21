const User = () => {

  try {
    const user = {
      first_name: window.localStorage.getItem('first_name'),
      last_name: window.localStorage.getItem('last_name'),
      token: window.localStorage.getItem('token'),
      email: window.localStorage.getItem('user_email'),
      user_id: window.localStorage.getItem('user_id'),
    };

    return user;
  } catch (error) {

  }

};

export default User;
