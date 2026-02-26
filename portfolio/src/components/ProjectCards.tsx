import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";


const StyledButton = styled(Button)({
  backgroundColor: "pink",
  '&:hover':{
    backgroundColor:'#E75480'
  }
});
interface Url{
  id:number;
  name:string;
  url:string;
  previewImg:string;
  description:string;
}
interface ProjectProps{
  urls:Url[];
}
const ProjectCards:React.FC<ProjectProps> =({urls}) =>  {
  return (
    <Grid container spacing={7}>
      {urls.map(item => (
        <Grid key={item.id} size="auto">

           <Card key={item.id} sx={{maxWidth:345}}>
          <CardMedia
            component="img"
            height="194"
            image={item.previewImg}
            alt="previewImage"
          />
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <StyledButton variant="contained" href={item.url}>
              View Project
            </StyledButton>
          </CardContent>
        </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectCards;
