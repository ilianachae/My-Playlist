import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

export async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });
    const data = await response.json();
    return data.access_token;
}

export async function fetchTopTracks(accessToken: string, time_range: string) {
    try {
        const response = await fetch(`${TOP_TRACKS_ENDPOINT}?time_range=${time_range}&limit=20`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch tracks');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching top tracks:", error);
        throw error;
    }
}
