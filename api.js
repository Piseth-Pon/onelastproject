import PocketBase from './pocketbase.es.mjs';

const url = 'https://onelastproject.pockethost.io/'
const pb = new PocketBase(url)

async function getAllPosts() {
  const records = await pb.collection('posts').getFullList()
  return records
}

async function getOnePost(id) {
  const record = await pb.collection('posts').getOne(id)
  return record
}

export {
  getAllPosts,
  getOnePost,
  url
}