import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type CardProps = {
  title: string;
  description: string;
  img:
    | "images/weather.png"
    | "images/doggo.png"
    | "images/star-wars.png"
    | "images/filmfinity.png"
    | "images/paloma.png"
    | "images/mercado.png"
    | "images/freyja.png";
  onLiveClick: React.MouseEventHandler<HTMLButtonElement>;
  onCodeClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MediaCard({
  title,
  description,
  img,
  onLiveClick,
  onCodeClick,
}: CardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className="rounded-2xl">
      <CardMedia sx={{ height: 140 }} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="justify-around">
        <Button
          size="small"
          onClick={onLiveClick}
          className="text-dark hover:bg-transparent font-normal transition-all hover:font-bold"
        >
          Live Preview
        </Button>
        <Button
          size="small"
          onClick={onCodeClick}
          className="text-dark hover:bg-transparent font-normal transition-all hover:font-bold"
        >
          View Code
        </Button>
      </CardActions>
    </Card>
  );
}
