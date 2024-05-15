import React from 'react';

interface TrackDisplayProps {
    tracks: any[];
    error: string;
}

const TrackDisplay: React.FC<TrackDisplayProps> = ({ tracks, error }) => {
    if (error) {
        return <div><p>Error: {error}</p></div>;
    }

    if (tracks.length === 0) {
        return <div><p>No tracks found for the selected period.</p></div>;
    }

    return (
        <div>
            {tracks.map((track, index) => (
                <div key={index}>
                    <p>{track.name} by {track.artists.map((artist: any) => artist.name).join(", ")}</p>
                    <img src={track.album.images[0]?.url} alt={track.name} style={{ width: 100, height: 100 }} />
                </div>
            ))}
        </div>
    );
};

export default TrackDisplay;
