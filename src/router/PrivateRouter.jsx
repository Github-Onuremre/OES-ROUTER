import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const email = "ipekbilir@gmail.com";
  const password = "1234";
  return email === "ipekbilir@gmail.com" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
  // kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Home) kal ya da başka path veriledebilir
}

export default PrivateRouter