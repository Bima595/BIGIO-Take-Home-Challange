import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Paper, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const StoryTable = ({ stories }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Writers</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Keyword</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stories.map((story, index) => (
            <TableRow key={story.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{story.title}</TableCell>
              <TableCell>{story.writer}</TableCell>
              <TableCell>{story.category}</TableCell>
              <TableCell>
                {story.keywords.map((keyword) => (
                  <Chip key={keyword} label={keyword} variant="outlined" sx={{ mr: 1 }} />
                ))}
              </TableCell>
              <TableCell>
                <Chip
                  label={story.status}
                  color={story.status === 'Publish' ? 'success' : 'warning'}
                  sx={{ fontWeight: 'bold' }}
                />
              </TableCell>
              <TableCell>
                <IconButton aria-label="more">
                  <MoreVert />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

StoryTable.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      status: PropTypes.oneOf(['Publish', 'Draft']).isRequired,
    })
  ).isRequired,
};

export default StoryTable;
