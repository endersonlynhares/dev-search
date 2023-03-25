import { ThemeProvider } from "styled-components";
import { light } from "./styles/theme/light";
import { dark } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./styles.js";
import { Search } from "./components/Search";
import { DevInfo } from "./components/DevInfo";
import { DevContextProvider } from "./contexts/DevContext";
import { useState } from "react";
import { Moon, Sun } from "phosphor-react";

function App() {

  const [theme, setTheme] = useState(light);
  const toggleTheme = () =>{
    setTheme(state => state.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <DevContextProvider>
        <AppContainer>
          <main>
            <header>
              <h1>DevSearch</h1>
              <button onClick={toggleTheme}>
                {theme.title.toUpperCase()}
                {theme.title == 'light' ? <Sun size={32} weight="fill" /> : <Moon size={25} weight="fill" />}
              </button>
            </header>
            <Search />
            <DevInfo />
          </main>
        </AppContainer>
      </DevContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
