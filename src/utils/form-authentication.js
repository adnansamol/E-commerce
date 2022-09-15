export const passwordAuthentication = (password) => {
  if (password.length >= 8) {
    return true;
  }
  return false;
};
export const emailAuthentication = (email) => {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log();
  return regExp.test(email);
};

export const nameAuthentication = (fname, lname) => {
  if (fname.length >= 4 && lname.length >= 4) {
    return true;
  }
  return false;
};
export const phoneAuthentication = (phone) => {
  if (phone.toString().length >= 10 && typeof phone === "number") {
    return true;
  }
  return false;
};
export const confirmPasswordAuthentication = (password, confirmPassword) => {
  if (confirmPassword === password) {
    return true;
  }
  return false;
};
