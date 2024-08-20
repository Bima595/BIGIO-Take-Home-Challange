import { Box, Typography } from '@mui/material';
import StoryTable from '../components/StoryTable';
import StorySearch from '../components/StorySearch';
import StoryActions from '../components/StoryActions';
import StoryPagination from '../components/StoryPagination';
import { stories } from '../data/stories';

const StoryManagement = () => {
  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>Stories</Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <StorySearch />
        <StoryActions />
      </Box>
      <StoryTable stories={stories} />
      <StoryPagination total={stories.length} />
    </Box>
  );
};

export default StoryManagement;
