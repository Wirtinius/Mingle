import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import getLocations from '../handler/locationUtils';
import './Map.css';

function Map() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lydGluaXVzIiwiYSI6ImNsc3FkZjBjcTB2eHYycW80dnVwOWpyYW4ifQ.0xTFl8yHsn4cmp1C6zzqiw';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(71.427546);
    const [lat, setLat] = useState(51.149784);
    const [zoom, setZoom] = useState(15);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLocations();
                setLocations(data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom
            });

            map.current.on('load', () => {
                map.current.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': locations.map(location => {
                            return {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [location.location.coordinates[0], location.location.coordinates[1]]
                                },
                                properties: {
                                    locationName: location.name,
                                    icon: 'monument'
                                }
                            };
                        })
                    }
                });

                map.current.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': ['get', 'icon'],
                        'icon-size': 1.5,
                        'text-field': '{locationName}',
                        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                        'text-offset': [0, 0.9],
                        'text-anchor': 'top'
                    }
                });
            });
        }
    }, [lng, lat, zoom, locations]);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map;
