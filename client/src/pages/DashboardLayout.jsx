import { Outlet, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import React, { createContext, useContext, useState } from 'react';

export const loader = () => {
  return 'hello world';
};

const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const data = useLoaderData();
  console.log(data);
  //temp
  const user = { name: 'John' };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    console.log('isDarkTheme: ', isDarkTheme);
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(() => !showSidebar);
  };

  const logoutUser = async () => {
    // Implement logout functionality here
    console.log('User logged out');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        logoutUser,
        showSidebar,
        toggleSidebar,
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {/* Nested routes will render here */}
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default DashboardLayout;
