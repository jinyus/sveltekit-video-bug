// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export async function load({ params }) {
    return { id: Number(params.id) };
}