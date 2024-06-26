'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const handleDbBackup = async () => {
    try {
      const response = await fetch(`${baseURL}/backup`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  

    } catch (error) {
      console.error('Error:', error);
    }
  }


  const handleLogout = async () => {
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
  
      clearLocalStorage();
      redirectToLoginPage();
    } catch (error) {
      setError(error.message);
    }
  };
  
  const clearLocalStorage = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('first_name');
    window.localStorage.removeItem('last_name');
    window.localStorage.removeItem('user_email');
  };
  
  const redirectToLoginPage = () => {
    router.push('/');
  };
  
  const sidebarData = [
    // {
    //   icon: "/img/dashboard/sidebar/booking.svg",
    //   title: "Manage Hotel",
    //   links: [
    //     { title: "All Hotel", href: "./hotels" },
    //     { title: "Add Hotel", href: "./add-hotel" },
    //   ],
    // },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Tour",
      links: [
        { title: "All Tour", href: "/vendor-dashboard/tours" },
        { title: "Add Tour", href: "/vendor-dashboard/add-tour" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/sneakers.svg",
      title: "Manage Activity",
      links: [
        { title: "All Activity", href: "/vendor-dashboard/activities" },
        { title: "Add Activity", href: "/vendor-dashboard/add-activity" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/canoe.svg",
      title: "Manage Golf",
      links: [
        {
          title: "All Golf",
          href: "/vendor-dashboard/golfs",
        },
        {
          title: "Add Golf",
          href: "/vendor-dashboard/add-golf",
        },        
      ],
    },
    // {
    //   icon: "/img/dashboard/sidebar/gear.svg",
    //   title: "Db Tools",
    //   links: [
    //     { title: "Backup Db", href: "/vendor-dashboard/backup" },
    //   ],
    // },

  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        {sidebarData.map((item, index) => (
          <div className="sidebar__item" key={index}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#sidebarItem${index}`}
                >
                  <div className="sidebar__button col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Image
                        width={20}
                        height={20}
                        src={item.icon}
                        alt="image"
                        className="mr-10"
                      />
                      {item.title}
                    </div>
                    <div className="icon-chevron-sm-down text-7" />
                  </div>
                </div>
                <div
                  id={`sidebarItem${index}`}
                  className="collapse"
                  data-bs-parent="#vendorSidebarMenu"
                >
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.href} className="text-15" aria-label="Login">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="sidebar__item ">
        <button onClick={handleDbBackup} className="sidebar__button d-flex items-center text-15 lh-1 fw-500"  aria-label="Close">
     
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/gear.svg"
              alt="image"
              className="mr-15"
            />
            Db Backup
            </button>
        </div>
        <div className="sidebar__item ">
        <button onClick={handleLogout} className="sidebar__button d-flex items-center text-15 lh-1 fw-500"  aria-label="Close">
     
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
            </button>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
