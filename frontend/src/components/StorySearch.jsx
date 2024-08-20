import { Paper, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const StorySearch = () => {
  return (
    <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 300 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Writers / Title"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default StorySearch;
