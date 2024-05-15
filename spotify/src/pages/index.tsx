import React, { useState, useEffect } from 'react';
import PeriodSelector from '../components/PeriodSelector';
import TrackDisplay from '../components/TrackDisplay';
import { getAccessToken, fetchTopTracks } from '../utils/spotifyApi';

const Home: React.FC = () => {
    const [accessToken, setAccessToken] = useState<string>('');
    const [tracks, setTracks] = useState<any[]>([]);
    const [period, setPeriod] = useState<string>('short_term');  // Default to last month
    const [error, setError] = useState<string>('');

    useEffect(() => {
        getAccessToken().then(token => {
            setAccessToken(token);
        }).catch(err => {
            setError('Error fetching access token');
            console.error(err);
        });
    }, []);

    useEffect(() => {
        if (accessToken && period) {
            fetchTopTracks(accessToken, period).then(data => {
                setTracks(data);
                setError('');
            }).catch(err => {
                setError('Failed to fetch tracks');
                console.error(err);
            });
        }
    }, [accessToken, period]);

    return (
        <div>
            <PeriodSelector setPeriod={setPeriod} />
            <TrackDisplay tracks={tracks} error={error} />
        </div>
    );
};

export default Home;
