const CACHE_KEY = 'wealth-map-cache';
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours in ms

function saveCache(data: any,CACHE_KEY:string) {
  const record = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(record));
}

function loadCache(CACHE_KEY:string) {
  const recordStr = localStorage.getItem(CACHE_KEY);
  if (!recordStr) return null;

  try {
    const record = JSON.parse(recordStr);
    if (Date.now() - record.timestamp > CACHE_TTL) {
      // Cache expired
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return record.data;
  } catch {
    localStorage.removeItem(CACHE_KEY);
    return null;
  }
}

// Usage example:
export async function fetchproperties() {
  const cached = loadCache('get-properties');
  if (cached) return cached;

  const res = await fetch('/api/property/all');
  if (!res.ok) throw new Error('Failed to fetch');

  const data = await res.json();
  saveCache(data,'get-properties');
  return data;
}
export async function fetchowners() {
  const cached = loadCache('get-owners');
  if (cached) return cached;

  const res = await fetch('/api/owner/all');
  if (!res.ok) throw new Error('Failed to fetch');

  const data = await res.json();
  saveCache(data,'get-properties');
  return data;
}
