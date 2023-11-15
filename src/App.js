import './App.css';
import { createContext, useState } from 'react';
import TaskBar from "./Layouts/Taskbar/TaskBar";
import Home from './Pages/Home/Home';
import PersonalInfo from './Pages/PersonalInfo/PersonalInfo';
import Resume from './Pages/Resume/Resume';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Works from './Pages/Works/Works';

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState("light-background");
  const [homeStyle, setHomeStyle] = useState({
    style: {},
    defaultPosition: {
      x: 500,
      y: 50
    }
  });

  const [personalInfoStyle, setPersonalInfoStyle] = useState({
    style: {},
    defaultPosition: {
      x: 50,
      y: 50
    }
  });

  const [resumeStyle, setResumeStyle] = useState({
    style: {},
    defaultPosition: {
      x: 950,
      y: 50
    }
  });

  const [contactStyle, setContactStyle] = useState({
    style: {},
    defaultPosition: {
      x: 500,
      y: 400
    }
  });

  const [blogsStyle, setBlogsStyle] = useState({
    style: {},
    defaultPosition: {
      x: 730,
      y: 225
    }
  });

  const [worksStyle, setWorksStyle] = useState({
    style: {},
    defaultPosition: {
      x: 950,
      y: 400
    }
  });

  const [runningApp, setRunningApp] = useState(0);
  const [openedApps, setOpenedApps] = useState({
    home: 1,
    resume: 1,
    works: 1,
    blogs: 1,
    contact: 1
  });

  const [zIndex, setZIndex] = useState([
    {
      name: "home",
      zIndex: 5
    },
    {
      name: "resume",
      zIndex: 4
    },
    {
      name: "works",
      zIndex: 3
    },
    {
      name: "blogs",
      zIndex: 1
    },
    {
      name: "contact",
      zIndex: 2
    },
    {
      name: "personal",
      zIndex: 6
    }
  ]);

  const setNewTheme = (value) => {
    setTheme(value);
  }

  const setIsRunningApp = (value) => {
    setRunningApp(value);
  }

  const setAreOpenedApps = (value) => {
    setOpenedApps(value);
  }

  const setNewHomeStyle = (value) => {
    setHomeStyle(value);
  }

  const setNewPersonalInfoStyle = (value) => {
    setPersonalInfoStyle(value);
  }

  const setNewResumeStyle = (value) => {
    setResumeStyle(value);
  }

  const setNewContactStyle = (value) => {
    setContactStyle(value);
  }

  const setNewBlogsStyle = (value) => {
    setBlogsStyle(value);
  }

  const setNewWorksStyle = (value) => {
    setWorksStyle(value);
  }

  const setNewZIndex = (name) => {
    setZIndex((zIndex) => {
      const newzIndex = [...zIndex];
      const currentItem = newzIndex.find(it => it.name === name);
      const shouldChangeIndexItems = newzIndex.filter(it => it.zIndex > currentItem.zIndex);
      shouldChangeIndexItems.forEach(it => it.zIndex = it.zIndex - 1);
      currentItem.zIndex = 6;
      return newzIndex;
    });
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        setNewTheme,
        runningApp,
        setIsRunningApp,
        openedApps,
        setAreOpenedApps,
        homeStyle,
        setNewHomeStyle,
        personalInfoStyle,
        setNewPersonalInfoStyle,
        resumeStyle,
        setNewResumeStyle,
        contactStyle,
        setNewContactStyle,
        blogsStyle,
        setNewBlogsStyle,
        worksStyle,
        setNewWorksStyle,
        zIndex,
        setNewZIndex
      }}
    >
      <div className="main-container">
        <Home />
        <PersonalInfo />
        <Resume />
        <Blogs />
        <Contact />
        <Works />
      </div>
      <div className="not-support-message">
        Your device is not compatible with our current system, please upgrade your device or use a compatible device to make sure your experience should not be affected!
      </div>
      <TaskBar />
    </AppContext.Provider >
  );
}

export default App;
