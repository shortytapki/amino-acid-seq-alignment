import { Flex, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import Main from "@/module/Main";

function App() {
  return (
    <MantineProvider>
      <Flex component="main" justify="center" p={24}>
        <Main />
      </Flex>
      <Notifications />
    </MantineProvider>
  );
}

export default App;
