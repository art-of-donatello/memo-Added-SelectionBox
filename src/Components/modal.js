

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Modal({setIsOpen, itemData, setMeme}) {
  return (
    <>
    <div className="darkBG" onClick={() => setIsOpen(false)} />
    <div className="centered">
      
      <div className="modal">
      <div className="heading">
   
      </div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.url}>  
      <img onClick={() =>setMeme({
      toptext: '',
      bottomtext: '',
      randomImg: item.url,
      box_count: 2
  })}
        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      </div></div>
      </>
  );
};

export default Modal;