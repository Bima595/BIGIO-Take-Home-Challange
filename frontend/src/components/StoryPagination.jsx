import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';

const StoryPagination = ({ total }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
      <Typography>Menampilkan {total} dari {total} data</Typography>
      <Box>
        <Button>1</Button>
        <Button>{'>'}</Button>
      </Box>
    </Box>
  );
};

StoryPagination.propTypes = {
  total: PropTypes.number.isRequired,
};

export default StoryPagination;
