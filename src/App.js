import './App.css';
import { createContext, useEffect, useState } from 'react';
import TaskBar from "./Layouts/Taskbar/TaskBar";
import Home from './Pages/Home/Home';
import PersonalInfo from './Pages/PersonalInfo/PersonalInfo';
import Settings from './Pages/Settings/Settings';
import Contact from './Pages/Game/Game';
import Works from './Pages/Works/Works';
import { Modal } from './components/Modal';
import { isTablet, mobileModel, deviceType } from 'react-device-detect';

export const AppContext = createContext();

export const standardTheme = {
  light: "light-background",
  dark: "dark-background",
  lightTransparent: "light-background-transparent",
  darkTransparent: "dark-background-transparent"
}

export const blurLevels = {
  none: "",
  level1: "blur-1",
  level2: "blur-2",
  level3: "blur-3",
  level4: "blur-4",
  level5: "blur-5"
}

export const actionBarColors = {
  color_1: "color-1",
  color_2: "color-2",
  color_3: "color-3",
  color_4: "color-4",
  color_5: "color-5"
}

function App() {
  const [open, setOpen] = useState(false);
  const [blur, setBlur] = useState(blurLevels.none);
  const [theme, setTheme] = useState(standardTheme.light);
  const [actionBarColor, setActionBarColor] = useState(actionBarColors.color_3);
  const [homeStyle, setHomeStyle] = useState({
    style: {},
    defaultPosition: {
      x: 20,
      y: 250
    }
  });

  const [personalInfoStyle, setPersonalInfoStyle] = useState({
    style: {},
    defaultPosition: {
      x: 350,
      y: 20
    }
  });

  const [resumeStyle, setResumeStyle] = useState({
    style: {},
    defaultPosition: {
      x: 950,
      y: 50
    }
  });

  const [gameStyle, setGameStyle] = useState({
    style: {},
    defaultPosition: {
      x: 730,
      y: 20
    }
  });

  const [settingsStyle, setSettingsStyle] = useState({
    style: {},
    defaultPosition: {
      x: 20,
      y: 20
    }
  });

  const [worksStyle, setWorksStyle] = useState({
    style: {},
    defaultPosition: {
      x: 730,
      y: 250
    }
  });

  const [runningApp, setRunningApp] = useState(0);
  const [openedApps, setOpenedApps] = useState({
    home: 1,
    personalInfo: 1,
    works: 1,
    settings: 1,
    game: 1
  });

  const [zIndex, setZIndex] = useState([
    {
      name: "home",
      zIndex: 4
    },
    {
      name: "resume",
      zIndex: 3
    },
    {
      name: "works",
      zIndex: 2
    },
    {
      name: "settings",
      zIndex: 5
    },
    {
      name: "contact",
      zIndex: 1
    },
    {
      name: "personal",
      zIndex: 6
    }
  ]);

  const setNewTheme = (value) => {
    if (blur === blurLevels.none) {
      setTheme(value);
    } else if (value.includes("dark")) {
      setTheme(standardTheme.darkTransparent);
    } else {
      setTheme(standardTheme.lightTransparent);
    }
  }

  const setNewBlurLevel = (value) => {
    if (value === blurLevels.none) {
      setTheme(prev => {
        if (prev.includes(standardTheme.light)) {
          return standardTheme.light;
        }
        return standardTheme.dark;
      });
      setBlur(value);
    } else {
      setTheme(prev => {
        if (prev.includes(standardTheme.light)) {
          return standardTheme.lightTransparent;
        }
        return standardTheme.darkTransparent;
      });
      setBlur(value);
    }
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

  const setNewGameStyle = (value) => {
    setGameStyle(value);
  }

  const setNewSettingsStyle = (value) => {
    setSettingsStyle(value);
  }

  const setNewWorksStyle = (value) => {
    setWorksStyle(value);
  }

  const setNewActionBarColor = (value) => {
    setActionBarColor(value);
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

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (18 > currentHour && currentHour > 6) {
      setTheme(standardTheme.light);
    } else {
      setTheme(standardTheme.dark);
    }
    if (isTablet) {
      setOpen(true);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setNewTheme,
        blur,
        setNewBlurLevel,
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
        gameStyle,
        setNewGameStyle,
        settingsStyle,
        setNewSettingsStyle,
        worksStyle,
        setNewWorksStyle,
        zIndex,
        setNewZIndex,
        actionBarColor,
        setNewActionBarColor
      }}
    >
      <div className="main-container">
        <Settings />
        <PersonalInfo />
        <Home />
        <Works />
        <Contact />
      </div>
      <div className="not-support-message">
        Your device is not compatible with our current system, please upgrade your device or use a compatible device to make sure your experience should not be affected!
      </div>
      <TaskBar />
      <Modal modalsize='small' backdropclose="true" isalert="true" modaltitle={`You are using ${mobileModel != "none" ? mobileModel : deviceType}`} show={open} onCancel={() => setOpen(false)}>
        Your {mobileModel} is supported for the computer features, but we recommend you use a computer browser to have the best experience!
        To use the computer features, please rotate your device to the horizontal view, and if the layout is broken, please reload the page!
      </Modal>
    </AppContext.Provider >
  );
}

export default App;
