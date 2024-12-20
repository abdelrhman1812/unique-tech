// "use client";

// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "600px",
// };

// const center = {
//   lat: 30.00697,
//   lng: 31.25265,
// };

// const darkMapStyle = [
//   {
//     elementType: "geometry",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#757575" }],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [{ color: "#757575" }],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#9e9e9e" }],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "landscape",
//     elementType: "geometry",
//     stylers: [{ color: "#2b2b2b" }],
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ color: "#2b2b2b" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#9e9e9e" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ color: "#0e1626" }],
//   },
// ];

// const Map = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAu2kP0E6_Oqe6TfZobiyBGIFFMQud5Ubs">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//         options={{
//           styles: darkMapStyle,
//           disableDefaultUI: true,
//         }}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;

const Map = () => {
  return <div>Map</div>;
};

export default Map;
