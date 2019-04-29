/**
 * App.js
 *
 * HOC for the app layout
 */
import React from "react";
import "./App.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import ZipSearchHandler from "./components/ZipSearchHandler";
import CityStateZip from "./components/CityStateZip";
import GoogleMap from "./components/GoogleMap";

const App = () => (
  <div className="App">
    <ZipSearchHandler
      render={data => (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Zippopotam.us API with Google Maps
            </Typography>
            <CityStateZip data={data} />
            {data.city && <GoogleMap lat={data.lat} lon={data.lon} />}
          </CardContent>
        </Card>
      )}
    />
  </div>
);

export default App;
