export interface Social {
  platform: 'youtube' | 'instagram' | 'tiktok' | 'facebook' | 'twitter' | 'linkedin' | 'github';
  url: string;
  label?: string;
}

export interface Link {
  title: string;
  icon: string;
  url: string;
  color?: 'green' | 'blue' | 'red' | 'black' | 'facebook' | 'purple' | 'yellow';
}

export interface SiteConfig {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socials: Social[];
  links: Link[];
  footer?: {
    text?: string;
    showCredit?: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Mike Key",
  title: "Content Creator & Real Estate Investor",
  bio: "I'm so glad you are here. Below you'll find all my socials and my buy box for real estate deals.",
  avatar: "/img/Mike-Key-Profile-Pic-Master-Banner_07-11-2023_001.webp",

  socials: [
    {
      platform: "X",
      url: "https://x.com/justmikekey",
      label: "Follow on X"
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/@justmikekey",
      label: "Subscribe to me on YouTube"
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/justmikekey/",
      label: "Follow me on Instagram"
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/@justmikekey",
      label: "Connect on LinkedIn"
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/justmikekey",
      label: "Be friends on Facebook"
    },

  ],

  links: [
    {
      title: "My Musings & Writings",
      icon: "megaphone",
      url: "https://mikekey.com",
      color: "green"
    },
    {
      title: "My Investment Buy Box",
      icon: "dollar",
      url: "https://bit.ly/3rq4g2c",
      color: "green"
    },
    {
      title: "Hometown Investors - My Real Estate Company",
      icon: "heart-empty",
      url: "https://hometowninvestors.com",
      color: "facebook"
    },
    {
      title: "Hire Me",
      icon: "heart",
      url: "#",
      color: "blue"
    },
    {
      title: "Shoot Me an Email",
      icon: "mail",
      url: "mailto:mike@1337hero.com",
      color: "black"
    }
  ],

  footer: {
    text: "Made with",
    showCredit: true
  }
};