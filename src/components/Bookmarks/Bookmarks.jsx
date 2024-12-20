import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3">
            <h2>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;