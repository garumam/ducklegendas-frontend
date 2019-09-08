import React from "react";
import { SimpleTopAppBar, TopAppBarFixedAdjust } from "@rmwc/top-app-bar";
// import '@material/top-app-bar/dist/mdc.top-app-bar.css';




export default () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <>
    
       <SimpleTopAppBar
    title="test"
    navigationIcon={{ onClick: () => console.log('Navigate') }}
    actionItems={[
      {
        icon: 'file_download',
        onClick: () => console.log('Do Something')
      },
      { icon: 'print', onClick: () => console.log('Do Something') },
      { icon: 'bookmark', onClick: () => console.log('Do Something') }
    ]}
  />
  <TopAppBarFixedAdjust />

  <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
      
    </>
  );
};
