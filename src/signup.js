const handleSignUp = async (e) => {
  e.preventDefault();
  const signUpURL = process.env.REACT_APP_DATABASE_URL_SIGNUP;
  const data = {
    username: "",
    password: "",
  };
  axios.post(signUpURL, data);
};
