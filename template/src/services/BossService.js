const ENDPOINT = 'http://localhost:4500/api/bosses';

const BossService = () => {
    return  {
        getBosses: () => fetch(ENDPOINT).then(d => d.json()),
        postBoss: boss => { return fetch(ENDPOINT, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify(boss)
        }).then(resp => {
            if(resp.ok) {return resp.json();}
        }).then( data => {if(data) return data})}
    };
};

export default BossService();