'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import  { useEffect, useState } from "react";
import Constants from "../../utils/constants";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { push } = useRouter();

  const submit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`${Constants.baseURL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const body = await res.json();
  
      if (res.status === 200) {
        window.localStorage.setItem('firstName', JSON.stringify(body.user.firstName));
        window.localStorage.setItem('isAdmin', JSON.stringify(body.user.isAdmin));
        console.log('Successful login');
        setRedirect(true);
      } else {
        console.error(body.message);
      }
    } catch (error) {
      console.error('Error during login:', error);

    }
  };
  
  useEffect(() => {
    if (redirect) {
      if (window.localStorage.getItem('isAdmin') === '1') {
        push('/vendor-dashboard/dashboard');
      }else {
        push('/'); 
      }
    
    }
  }, [redirect, push]);

  return (
    <form className="row y-gap-20" onSubmit={submit} >
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required value={email} onChange={(e) => setEmail(e.target.value) } />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" required   value={password} onChange={(e) => setPassword(e.target.value) }/>
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
