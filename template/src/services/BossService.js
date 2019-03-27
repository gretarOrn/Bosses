const ENDPOINT = 'http://localhost:4500/api/bosses'

const BossService = () => {
    return  {
        getBosses: () => fetch(ENDPOINT).then(d => d.json())
    };
};

export default BossService();