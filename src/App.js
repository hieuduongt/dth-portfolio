import './styles.css';
import { createContext, useEffect, useState, useRef } from 'react';
import TaskBar from "./Layouts/Taskbar/TaskBar";
import Starting from './Pages/Starting/Starting';
import Home from './Pages/Home/Home';
import PersonalInfo from './Pages/PersonalInfo/PersonalInfo';
import Settings from './Pages/Settings/Settings';
import Game from './Pages/Game/Game';
import { Modal } from './components/Modal';
import { isTablet, mobileModel, deviceType } from 'react-device-detect';
import QuickSettings from './Layouts/QuickSettings/QuickSetting';
import Notification from './Layouts/Notifications/Notification';
import WindowNewFeeds from './Layouts/WindowNewFeeds/WindowNewFeeds';

export const AppContext = createContext();

export const standardTheme = {
  light: "light-background",
  dark: "dark-background",
  lightTransparent: "light-background-transparent",
  darkTransparent: "dark-background-transparent"
}

export const blurLevels = {
  none: "",
  blur: "blur-3",
}

export const actionBarColors = [
  "#ffabd8",
  "#ffd19b",
  "#0871c6",
  "#07c598",
  "#ff925d"
]

export const backGrounds = {
  appearance_dynamic: {
    dark: "wallpaper_appearance-dynamic-dark.png",
    light: "wallpaper_appearance-dynamic-light.png",
    name: "appearance_dynamic"
  },
  colorful: {
    dark: "colorful-dark.jpg",
    light: "colorful-light.jpg",
    name: "colorful"
  },
  ventura: {
    dark: "ventura-dark.jpg",
    light: "ventura-light.jpg",
    name: "ventura"
  },
  window7: {
    dark: "window-7-dark.jpg",
    light: "window-7-light.jpg",
    name: "window7"
  },
  window_bliss: {
    dark: "window-bliss-light.jpg",
    light: "window-bliss-light.jpg",
    name: "window_bliss"
  },
  window_default: {
    dark: "window-default-dark.jpg",
    light: "window-default-light.jpg",
    name: "window_default"
  },
  window_flower: {
    dark: "window-flower-dark.jpg",
    light: "window-flower-light.jpg",
    name: "window_flower"
  }
}

function App() {
  const mainContentRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openQuickSetting, setOpenQuickSetting] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openWindowNewFeeds, setOpenWindowNewFeeds] = useState(false);
  const [nightlight, setNightlight] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [loading, setLoading] = useState(true);
  const [currentBackground, setCurrentBackGround] = useState("");
  const [wallpapers, setWallpapers] = useState([]);
  const [blur, setBlur] = useState(blurLevels.blur);
  const [theme, setTheme] = useState(standardTheme.light);
  const [actionBarColor, setActionBarColor] = useState(actionBarColors[2]);
  const [actionBarColorPicker, setActionBarColorPicker] = useState("");
  const [loadingProgress, setLoadingProgress] = useState("MacDows is starting...");
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

  const [gameStyle, setGameStyle] = useState({
    style: {},
    defaultPosition: {
      x: 780,
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

  const initStyles = () => {
    setHomeStyle(prev => ({
      ...prev,
      defaultPosition: {
        x: 20,
        y: 250
      }
    }));

    setPersonalInfoStyle(prev => ({
      ...prev,
      defaultPosition: {
        x: 350,
        y: 20
      }
    }));

    setGameStyle(prev => ({
      ...prev,
      defaultPosition: {
        x: 780,
        y: 20
      }
    }));

    setSettingsStyle(prev => ({
      ...prev,
      defaultPosition: {
        x: 20,
        y: 20
      }
    }));
  }

  const [runningApp, setRunningApp] = useState(0);
  const [openedApps, setOpenedApps] = useState({
    home: 1,
    personal: 1,
    settings: 1,
    game: 0
  });

  const [zIndex, setZIndex] = useState([
    {
      name: "home",
      zIndex: 3
    },
    {
      name: "settings",
      zIndex: 2
    },
    {
      name: "game",
      zIndex: 4
    },
    {
      name: "personal",
      zIndex: 1
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

  const setNewGameStyle = (value) => {
    setGameStyle(value);
  }

  const setNewSettingsStyle = (value) => {
    setSettingsStyle(value);
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

  const setBackGround = (name, light, dark) => {
    mainContentRef.current.style.setProperty("--light-url", `url("../../${light}")`);
    mainContentRef.current.style.setProperty("--dark-url", `url("../../${dark}")`);
    setCurrentBackGround(name);
  }

  useEffect(() => {
    setLoading(true);

    if (mainContentRef.current) {
      const images = getImagesSrc(require.context('../public', false, /\.(png|jpe?g|svg)$/));
      setWallpapers(images);
      setBackGround(images[5].name, images[5].light, images[5].dark);
    }
    const currentHour = new Date().getHours();
    if (18 > currentHour && currentHour > 6) {
      setTheme(standardTheme.light);
    } else {
      setTheme(standardTheme.dark);
    }
    setNewBlurLevel(blurLevels.blur);
    if (isTablet) {
      setOpen(true);
    }
    window.addEventListener("resize", initStyles);
    emulatorWindowsStartupScreen();
    return () => window.removeEventListener('resize', initStyles);
  }, []);

  const getImagesSrc = (r) => {
    const images = [];
    const reg = /(?<name>^wallpaper[\w-]+)(-light|-dark)/i;
    r.keys().forEach((item, index) => {
      if (reg.test(item.replace('./', ''))) {
        images.push({
          src: item.replace('./', '')
        })
      }
    });
    const filteredImages = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      for (let j = i + 1; j < images.length; j++) {
        const otherImage = images[j];
        if (reg.exec(otherImage.src).groups.name === reg.exec(image.src).groups.name) {
          filteredImages.push({
            name: reg.exec(image.src).groups.name,
            dark: image.src.includes("dark") ? image.src : otherImage.src,
            light: image.src.includes("light") ? image.src : otherImage.src
          })
        }
      }
    }
    return filteredImages;
  }

  const emulatorWindowsStartupScreen = async () => {

    const startingMacDows = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, "Welcome to MacDows");
    });

    await startingMacDows.then((value) => {
      setLoadingProgress(value);
    });

    setLoading(false);
  }

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
        gameStyle,
        setNewGameStyle,
        settingsStyle,
        setNewSettingsStyle,
        zIndex,
        setNewZIndex,
        actionBarColor,
        setNewActionBarColor,
        setBackGround,
        currentBackground,
        setLoading,
        actionBarColorPicker,
        setActionBarColorPicker,
        wallpapers,
        openQuickSetting,
        setOpenQuickSetting,
        setNightlight,
        setBrightness,
        openNotification,
        setOpenNotification,
        notificationCount,
        setNotificationCount,
        openWindowNewFeeds,
        setOpenWindowNewFeeds
      }}
    >
      <Starting started={!loading} displayText={loadingProgress} />
      <div className="main-container" ref={(ref) => (mainContentRef.current = ref)}>
        {
          loading ? <></> :
            <>
              <Home />
              <PersonalInfo />
              <Settings />
              <Game />
            </>
        }
        <div className={`night-light ${nightlight ? "on" : "off"}`}>
        </div>
        <div className={`brightness`} style={{
          backgroundColor: `rgb(0 0 0 / ${100 - brightness}%)`
        }}>
        </div>

      </div>
      <QuickSettings />
      <Notification />
      <WindowNewFeeds />
      <div className="not-support-message">
        Your device is not compatible with our current system, please upgrade your device or use a compatible device to make sure your experience should not be affected!
      </div>
      <TaskBar />
      <Modal
        modalsize='small'
        backdropclose={false}
        isalert={true}
        modaltitle={`You are using ${mobileModel != "none" ? mobileModel : deviceType}`}
        show={open}
        onCancel={() => setOpen(false)}
      >
        Your {mobileModel} is supported for the computer features, but we recommend you use a computer browser to have the best experience!
        To use the computer features, please rotate your device to the horizontal view, and if the layout is broken, please reload the page!
      </Modal>
    </AppContext.Provider >
  );
}

export default App;
