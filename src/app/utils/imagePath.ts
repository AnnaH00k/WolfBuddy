/**
 * Get the correct image path for both localhost and GitHub Pages
 * GitHub Pages uses a basePath (/WolfBuddy), localhost doesn't
 */
export function getImagePath(path: string): string {
  // If path is already absolute (starts with http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get basePath from Next.js config or environment
  // In production on GitHub Pages, basePath will be injected by the workflow
  // For localhost, basePath will be empty
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine basePath and path, avoiding double slashes
  return `${basePath}${normalizedPath}`;
}

