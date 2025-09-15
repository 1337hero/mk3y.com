export const BRAND_COLORS = {
  // Social platforms
  youtube: '#FF0000',
  facebook: '#1877f2',
  linkedin: '#0077b5',
  twitter: '#1da1f2',
  instagram: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  tiktok: '#000',
  github: '#333',
  // Modern Tailwind-inspired colors
  green: '#10b981',  // Emerald-500
  blue: '#3b82f6',   // Blue-500
  red: '#ef4444',    // Red-500
  black: '#0f172a',  // Slate-900
  purple: '#8b5cf6', // Violet-500
  yellow: '#f59e0b', // Amber-500
  orange: '#f97316', // Orange-500
  teal: '#14b8a6',   // Teal-500
  pink: '#ec4899'    // Pink-500
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;
export type SocialPlatform = 'youtube' | 'facebook' | 'linkedin' | 'twitter' | 'instagram' | 'tiktok' | 'github';
export type ThemeColor = 'green' | 'blue' | 'red' | 'black' | 'purple' | 'yellow';