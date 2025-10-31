// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1417902909378789396",
        serverId: "1207699439683117127",
        token: "MTI1Njk1NDMwODE3MjQ0Nzc3NQ.GJob-0.slWvDRgXBLM0U3g_ueU8APe4BGj5scJ7YNQsA4",
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
];