import { ThemeProvider } from "styled-components";
import { light } from "./styles/theme/light";
import { dark } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./styles.js";
import { Search } from "./components/Search";
import { DevInfo } from "./components/DevInfo";
import { DevContextProvider } from "./contexts/DevContext";

function App() {


  return (
    <ThemeProvider theme={dark}>
      <DevContextProvider>
        <AppContainer>
          <main>
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
