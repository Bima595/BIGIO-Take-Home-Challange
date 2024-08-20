import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, LibraryBooks } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#f5f5f5',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        STORYKU
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Story Management" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
