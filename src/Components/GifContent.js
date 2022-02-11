import React, { useContext } from 'react';
import noteContext from '../Context/noteContext'
import Card from '@mui/material/Card';
import InfiniteScroll from "react-infinite-scroll-component";
import './GifContent.css'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';




const GifContent = ({ closeGif, gifInfo }) => {

  const context = useContext(noteContext)
  const { data, fetchMoreData, myGif } = context


  return <div className="gifContent">

    <div className="gif_title">
      <h3>Choose a Gif</h3>
      <Button>
        <CloseIcon onClick={() => closeGif(false)} />
      </Button>
    </div>
    <div className="gif_searchBar">
      <input onChange={(e) => myGif(e.target.value)} type="text" />
    </div>

    {data.map((item, index) => {
      return (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}>
          <div className="gifItem" key={index}>
            <Button onClick={() => gifInfo(item.images.fixed_height.url)}>
              <Card sx={{ width: 200, height: 200 }}>
                <img src={item.images.fixed_height.url} alt="" />
              </Card>
            </Button>
          </div>
        </InfiniteScroll>
      )
    })}
  </div>;
};

export default GifContent;
