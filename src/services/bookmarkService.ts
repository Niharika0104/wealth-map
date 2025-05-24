import axios from 'axios';

const BOOKMARK_API = '/api/bookmark';

export async function getBookmarks(userId: string ) {
  const res = await axios.get(BOOKMARK_API + `?userId=${userId}`);
  return res.data.propertyIds as string[];
}

export async function addBookmark(propertyId: string, userId: string ) {
  const res = await axios.post(BOOKMARK_API, { propertyId, userId });
  return res.data.propertyIds as string[];
}

export async function removeBookmark(propertyId: string, userId: string) {
  const res = await axios.delete(BOOKMARK_API, { data: { propertyId, userId } });
  return res.data.propertyIds as string[];
}
