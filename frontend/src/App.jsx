import { Box, Container } from '@mui/material';
import StoryManagement from './pages/StoryManagement';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: 30, p: 3 }}>
        <Container maxWidth="lg">
          <StoryManagement />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
