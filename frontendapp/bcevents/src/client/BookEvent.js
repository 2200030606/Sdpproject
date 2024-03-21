import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const IMAGE_SIZE = 440; 
const GAP_SIZE = 86; 

export default function Racingpage() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  return (
    <ImageList style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }} gap={GAP_SIZE}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">MARRIAGE EVENT MANAGER SELECTING PAGE</ListSubheader>
      </ImageListItem>
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          cols={1}
          style={{
            width: `${IMAGE_SIZE}px`,
            height: `${IMAGE_SIZE}px`,
            marginRight: index === 2 ? `${GAP_SIZE}px` : '0', 
          }}
        >
          <img
            src={`${item.img}?w=${IMAGE_SIZE}&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/474x/b5/69/52/b56952f0b4decb1a56bf3c54d042381d.jpg',
    title: 'Wedding',
    author: 'Ankith Events',
    rows: 2,
    cols: 2,
    featured: true,
    link: '/book1event'
  },
  {
    img: 'https://i.pinimg.com/564x/5a/1f/64/5a1f6475d164512a85cab654917c8f13.jpg',
    title: 'Wedding',
    author: 'Ankith Events',
  },
  {
    img: 'https://i.pinimg.com/474x/43/26/c8/4326c8b9ffae7cf217e0e2c8a029abc5.jpg',
    title: 'Wedding',
    author: '@helloimnik',
  },
  {
    img: 'https://i.pinimg.com/474x/ac/f7/c3/acf7c32ed6326b9e2d2e31ac7f2ae208.jpg',
    title: 'Wedding',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/474x/a5/cd/6b/a5cd6b4ef0f580f9dfa646463830b23c.jpg',
    title: 'Wedding',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/474x/22/8a/b1/228ab14f61ba52cf6ba94a585261adb3.jpg',
    title: 'Wedding',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/474x/a5/cd/6b/a5cd6b4ef0f580f9dfa646463830b23c.jpg',
    title: 'Wedding',
    author: '@tjdragotta',
  },
  {
    img: 'https://i.pinimg.com/736x/ec/46/a2/ec46a2329a1d8b36f3600ff7942ecbe8.jpg',
    title: 'Wedding',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/564x/8f/7f/29/8f7f293dd71583c22fb0df1589d6574d.jpg',
    title: 'Wedding',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/80/b3/af/80b3afcefb58fa04effc6decd4b2bcee.jpg',
    title: 'Haldi',
    author: 'Ankith Events',
    rows: 2,
    cols: 2,
    featured: true,
    link: '/book1event'
  },
  {
    img: 'https://i.pinimg.com/564x/5a/1f/64/5a1f6475d164512a85cab654917c8f13.jpg',
    title: 'Wedding',
    author: 'Ankith Events',
  },
  {
    img: 'https://i.pinimg.com/564x/de/c1/41/dec141381fef7ac2b815876935408e88.jpg',
    title: 'Haldi',
    author: '@helloimnik',
  },
  {
    img: 'https://i.pinimg.com/564x/20/de/11/20de1120dbddc05ddb90a2926b3e5e4f.jpg',
    title: 'Haldi',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/f0/5b/78/f05b78c451980ad9ab8e9b3a4c85d309.jpg',
    title: 'Haldi',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/f6/d3/0d/f6d30d794ea7d02a8a805be4ed2d7a32.jpg',
    title: 'Haldi',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/564x/3a/c7/1c/3ac71c6c0cc0d527263025d6e3433d83.jpg',
    title: 'Haldi',
    author: '@tjdragotta',
  },
  {
    img: 'https://i.pinimg.com/474x/0f/5e/c4/0f5ec4a2705c87f6f66a19467d801fcf.jpg',
    title: 'Haldi',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/474x/d0/9c/f3/d09cf316c3afa99e108e917ae4b7e227.jpg',
    title: 'Haldi',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/61/63/a7/6163a7e6336f78ac3ca2f37bfb5c50d0.jpg',
    title: 'Birthday',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/564x/4d/29/b9/4d29b9dc7bebc0639b6253732147a262.jpg',
    title: 'Birthday',
    author: '@tjdragotta',
  },
  {
    img: 'https://i.pinimg.com/564x/8d/f3/c9/8df3c9578c38efcb35b4f1fc9cb78f56.jpg',
    title: 'Birthday',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/564x/9b/84/e4/9b84e4cef673e01f7c6cb5c6dffb8521.jpg',
    title: 'Birthday',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/23/52/1c/23521c3f80be26a1ccd971e9bf4779b9.jpg',
    title: 'Birthday',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/564x/b5/04/29/b50429382a9033edab3f59f4ec365fc9.jpg',
    title: 'Birthday',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/ab/6a/7c/ab6a7c5a7a0a82014609e2ae42ec2e63.jpg',
    title: 'Birthday',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/f9/90/42/f99042f17569edf3ec724609e20e864c.jpg',
    title: 'Birthday',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/564x/ab/18/b9/ab18b9cea7e717169315130dea245f91.jpg',
    title: 'Birthday',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
];