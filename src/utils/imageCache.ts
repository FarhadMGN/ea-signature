const CACHE_NAME = 'dev-evtushenko-images-v1'

const memoryCache = new Map<string, string>()

function canUseCacheStorage(): boolean {
  return typeof window !== 'undefined' && 'caches' in window
}

export async function getCachedImageUrl(src: string): Promise<string> {
  if (!src) return src

  const memorized = memoryCache.get(src)
  if (memorized) return memorized

  if (!canUseCacheStorage()) {
    memoryCache.set(src, src)
    return src
  }

  try {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(src)

    if (cached) {
      const objectUrl = URL.createObjectURL(await cached.blob())
      memoryCache.set(src, objectUrl)
      return objectUrl
    }

    const response = await fetch(src, { cache: 'force-cache' })
    if (response.ok) {
      await cache.put(src, response.clone())
      const objectUrl = URL.createObjectURL(await response.blob())
      memoryCache.set(src, objectUrl)
      return objectUrl
    }
  } catch {
    // Fall through to network URL when Cache API / fetch fails.
  }

  memoryCache.set(src, src)
  return src
}

export function prefetchImages(urls: string[]): void {
  void Promise.all(urls.map((url) => getCachedImageUrl(url)))
}
