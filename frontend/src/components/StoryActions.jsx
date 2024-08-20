import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const StoryActions = () => {
  return (
    <Button variant="contained" startIcon={<Add />} color="warning">
      Add Story
    </Button>
  );
};

export default StoryActions;
