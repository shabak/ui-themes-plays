/** @jsxImportSource theme-ui */
import {useColorMode} from "theme-ui";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  console.log(colorMode);
  return (
    <header
      sx={{
        background: 'background',
      }}>
      <button
        onClick={(e) => {
          // setColorMode(colorMode === 'default' ? 'dark' : 'default')
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}
      >
        {/*Включить {colorMode === 'default' ? 'Dark' : 'Default'}*/}
        Включить {colorMode === 'light' ? 'Dark' : 'Default'}
      </button>
    </header>
  );
};

export default Header;