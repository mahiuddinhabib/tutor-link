import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CommonImg from "@/assets/common-card-img.jpeg";

export default function ClickableCard({ service }: { service: any }) {
  return (
    <Card>
      <CardActionArea LinkComponent={Link} href="/signin">
        <CardMedia>
          <Image
            src={CommonImg}
            width={0}
            height={0}
            sizes="100vw"
            alt="card image"
            style={{ width: "100%", height: "auto" }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
