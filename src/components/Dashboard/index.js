import React from "react";
import { Header,HeaderDashboard,Container,ContainerDashboard } from "./styles";

export default () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Header />
      <Container style={{height:'100%',flexWrap:'wrap'}}>
      <HeaderDashboard 
        title="test"
        navigationIcon={{ onClick: () => console.log("Navigate") }}
        actionItems={[
          {
            icon: "file_download",
            onClick: () => console.log("Do Something")
          },
          { icon: "print", onClick: () => console.log("Do Something") },
          { icon: "bookmark", onClick: () => console.log("Do Something") }
        ]}
      />
     
      <ContainerDashboard>
       <div style={{background:'#dedede'}}>dksaodkasokdsa</div>
      </ContainerDashboard>
     

      </Container>
    </Container>
  );
};
