// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export async function load({ params }) {
    let url = params.id % 2 === 0 ? 'https://media.vimejs.com/720p.mp4' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
    return { id: Number(params.id), url: url };
}